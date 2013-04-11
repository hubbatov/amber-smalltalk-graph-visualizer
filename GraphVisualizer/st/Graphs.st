Smalltalk current createPackage: 'Graphs'!
Object subclass: #GraphConnector
	instanceVariableNames: 'socket'
	package: 'Graphs'!

!GraphConnector methodsFor: 'not yet classified'!

connection
	^socket
!

createSocket: aBlock
		socket := NativeFunction constructor: 'WebSocket' value: 'ws://localhost:9900/broadcast'.
		socket onopen: [ window alert: 'Connection opened' ].
		socket onmessage: aBlock.
		socket onclose: [ window alert: 'Connection closed' ].
! !

Object subclass: #GraphEdge
	instanceVariableNames: 'src dest'
	package: 'Graphs'!

!GraphEdge methodsFor: 'not yet classified'!

dest
	^dest
!

dest: aNode
	dest := aNode
!

src
	^src
!

src: aNode
	src := aNode
! !

Object subclass: #GraphMouseHandler
	instanceVariableNames: 'dragged handler renderer'
	package: 'Graphs'!

!GraphMouseHandler methodsFor: 'accessing'!

setRenderer: aRenderer
	renderer := aRenderer.
	renderer canvas asJQuery mousedown: (handler at: 'clicked')
! !

!GraphMouseHandler methodsFor: 'initialization'!

createHandler
	handler := #{
		'clicked' -> [:event | self clicked: event].
		'dragged' -> [:event | self dragged: event].
		'dropped' -> [:event | self dropped: event]}
!

initialize
	super initialize.
	self createHandler.
! !

!GraphMouseHandler methodsFor: 'mouse handling'!

clicked: event	
	|  mousePosition |
	mousePosition := self getMousePositionForEvent: event.
	dragged := renderer particleSystem nearest: mousePosition.
	self draggedNotNil ifTrue: [
		 dragged node fixed: true].
	renderer canvas asJQuery bind: 'mousemove' do: (handler at: 'dragged').
	window asJQuery bind: 'mouseup' do: (handler at: 'dropped').
	^false
!

dragged: event
	|  mousePosition |
	mousePosition := self getMousePositionForEvent: event.
	self draggedNotNil ifTrue: [ | p|
		p := renderer particleSystem fromScreen: mousePosition.
		dragged node p: p].
	^false
!

draggedNotNil
	^(dragged notNil and: [dragged node notNil])
!

dropped: event
	self draggedNotNil ifFalse: [^self].
	dragged node fixed: false.
	dragged := nil.
	renderer canvas asJQuery unbind: 'mousemove' do: (handler at: 'dragged').
	window asJQuery unbind: 'mouseup' do: (handler at: 'dropped').
	^false
!

getMousePositionForEvent: event
	| pos mousePosition |
	pos := renderer canvas asJQuery offset.
	mousePosition := NativeFunction constructor: 'arbor.Point' value:  (event pageX - pos left)  value: (event pageY - pos top).
	^mousePosition
! !

!GraphMouseHandler class methodsFor: 'instance creation'!

newForRenderer: aRenderer
	^self new
		setRenderer: aRenderer;
		yourself
! !

Object subclass: #GraphNode
	instanceVariableNames: 'name'
	package: 'Graphs'!

!GraphNode methodsFor: 'not yet classified'!

name
	^name
!

name: aName
	name := aName
! !

Object subclass: #GraphRenderer
	instanceVariableNames: 'canvas ctx particleSystem mouseHandler'
	package: 'Graphs'!

!GraphRenderer methodsFor: 'accessing'!

canvas
	^canvas
!

jsInterface
	^#{
		'init' -> [:system | self initializeWithSystem: system].
		'redraw' -> [self redraw].
		'initializeMouseHandling' -> [self initializeMouseHandling]
	}
!

particleSystem
	^particleSystem
!

setCanvas: aCanvas
	canvas := aCanvas.
	ctx := canvas getContext: '2d'.
! !

!GraphRenderer methodsFor: 'drawing'!

drawLineFrom: pt1 to: pt2
	ctx strokeStyle: 'rgba(0,0,0, .333)';
		lineWidth: 1;
		beginPath;
		moveTo: pt1 x y: pt1 y;
		lineTo: pt2 x y: pt2 y;
		stroke.
!

drawPoint: pt forNode: node
	|w|
	w := 10.
	ctx fillStyle: ( GraphSettings nodeColor );
		beginPath;
		arc: (pt x ) y: ( pt y  ) w: ( GraphSettings nodeWidth ) h:0 r: ( Math PI * 2 ); 
		closePath;
		fill;
		fillStyle: ( GraphSettings textColor );
		font: ( GraphSettings font );
		fillText: node name x: (pt x - ( GraphSettings nodeWidth * 2 )) y: ( pt y + (GraphSettings nodeWidth * 2) )
!

redraw
	ctx fillStyle: 'white'.
	ctx fillRect: 0 y: 0 width: ( canvas width ) height: ( canvas height ).
	particleSystem eachEdge: [:edge :pt1 :pt2 | self drawLineFrom: pt1 to: pt2 ].
	particleSystem eachNode: [:node :pt | self drawPoint: pt forNode: node ]
! !

!GraphRenderer methodsFor: 'initiaization'!

initializeMouseHandling
 	mouseHandler := (GraphMouseHandler newForRenderer: self)
!

initializeWithSystem: aSystem
	particleSystem := aSystem.
	particleSystem screenSize: canvas width height: canvas height;
		screenPadding: 80.
	self initializeMouseHandling.
! !

!GraphRenderer class methodsFor: 'instance creation'!

newWithCanvas: aCanvas
	^self new
		setCanvas: aCanvas;
		yourself.
! !

Object subclass: #GraphSettings
	instanceVariableNames: ''
	package: 'Graphs'!

GraphSettings class instanceVariableNames: 'font nodeColor nodeWidth textColor'!

!GraphSettings class methodsFor: 'not yet classified'!

font
	font ifNil: [ font := '14px italic verdana' ].
	^font
!

font: aFont
	font := aFont
!

nodeColor
	nodeColor ifNil: [ nodeColor := 'red' ].
	^nodeColor
!

nodeColor: aNodeColor
	nodeColor := aNodeColor
!

nodeWidth
	nodeWidth ifNil: [ nodeWidth := 10 ].
	^nodeWidth
!

nodeWidth: aWidth
	nodeWidth := aWidth
!

textColor
	textColor ifNil: [ textColor := 'black' ].
	^textColor
!

textColor: aTextColor
	textColor :=  aTextColor
! !

Object subclass: #GraphVisualizer
	instanceVariableNames: 'socket logged'
	package: 'Graphs'!

!GraphVisualizer methodsFor: 'not yet classified'!

init
	| var |
	socket := ( GraphConnector new createSocket: [ :evt | self processMessage: ( evt data ) ] ) connection.
	( document getElementById: 'b_register' ) asJQuery click: [ self registerUser ].
	( document getElementById: 'b_login' ) asJQuery click: [ self login ].
!

isLogged
	logged ifNil: [ logged := false ].
	^logged
!

login
		| login password|
		login := ( document getElementById: 'l_login' ) value.
		password := ( document getElementById: 'l_password' ) value.
		socket send: ( 'Login#ChatUser findByLogin: ', '''' , login, '''' , ' andPassword: ', '''', password, ''''  ) .
!

processMessage: aMessage
	
	(aMessage match: 'Service#')  ifTrue: [ window alert: (aMessage replace: 'Service#' with: '') ].
	(aMessage match: 'Login#')  ifTrue: [ window alert: (aMessage replace: 'Login#' with: ''). self showForms: true. socket send: 'GetUsers#'. logged := true ].
	(aMessage match: 'Logout#')  ifTrue: [ window alert: (aMessage replace: 'Logout#' with: ''). self showForms: false. logged := false ].
	
	self isLogged ifTrue: [
				(aMessage match: 'Node#')  ifTrue: [ Compiler new evaluateExpression:  (aMessage replace: 'Node#' with: '') ] .
				(aMessage match: 'Edge#')  ifTrue: [ Compiler new evaluateExpression:  (aMessage replace: 'Edge#' with: '') ] .
].
!

registerUser
		|name surname login password|
		name := ( document getElementById: 'r_username' ) value.
		surname := ( document getElementById: 'r_usersurname' ) value.
		login := ( document getElementById: 'r_login' ) value.
		password := ( document getElementById: 'r_password' ) value.
		socket send: ( 'Register#ChatUser registerUser: (ChatUser new firstname: ', '''' , name, '''' , '; lastname: ', '''' , surname , '''' , '; login: ', '''' , login, '''' , '; password: ', '''', password, '''' ,')' ) .
!

showForms: aBoolean
	( document getElementById: 'registrationDiv' ) hidden: aBoolean.
	( document getElementById: 'loginDiv' ) hidden: aBoolean.
! !

GraphVisualizer class instanceVariableNames: 'nodes edges sys'!

!GraphVisualizer class methodsFor: 'not yet classified'!

addEdge: aSrc to: aDest
		GraphVisualizer currentEdges add: ( GraphEdge new src: aSrc; dest: aDest ).
		self draw
!

addNode: aNode
	GraphVisualizer currentNodes add: (GraphNode new name: aNode) .
	self draw
!

currentEdges
	edges ifNil: [ edges := Array new ] .
	^edges
!

currentEdges: aArray
	aArray do: [ :each | self currentEdges add: (GraphEdge new src: (each src) ; dest: ( each dest )) ].
!

currentNodes
	nodes ifNil: [ nodes := Array new ] .
	^nodes
!

currentNodes: aArray
	aArray do: [ :each | self currentNodes add: (GraphNode new name: (each name)) ].
!

draw
		( GraphVisualizer currentNodes ) do: [ :node | self sys addNode: ( node name ) ].
		( GraphVisualizer currentEdges ) do: [ :edge |  self sys addEdge: ( edge src ) and: ( edge dest ) ]
!

resize: aCanvas
	aCanvas width: ( window innerWidth - 20 ).
   aCanvas height: ( window innerHeight - 30 )
!

sys
	| canvas renderer |
		sys ifNil: [ 
		sys := (arbor ParticleSystem) value: 1000.
		( sys parameters ) asJQuery attr: 'gravity'  value:  true.
		canvas := (GraphRenderer newWithCanvas: ( ('#', 'viewport')  asJQuery at: 0 ) ).
		self updateRendererWithCanvas: ( canvas canvas ).
		window onresize: [
					self updateRendererWithCanvas: ( canvas canvas ).
		].
	].
	^sys
!

sys: aSys
	sys := aSys
!

updateRendererWithCanvas: aCanvas
	| newCanvas newRenderer |
	self resize: ( aCanvas ).
	newCanvas := (GraphRenderer newWithCanvas: ( ('#', 'viewport')  asJQuery at: 0 ) ).
	newRenderer := newCanvas jsInterface.
	( sys asJQuery ) attr: 'renderer' set: newRenderer.
! !

