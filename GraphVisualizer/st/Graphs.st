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

Object subclass: #GraphVisualizer
	instanceVariableNames: 'socket logged'
	package: 'Graphs'!

!GraphVisualizer methodsFor: 'not yet classified'!

init
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

GraphVisualizer class instanceVariableNames: 'nodes edges'!

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
		( GraphVisualizer currentNodes ) do: [ :node | sys addNode: ( node name ) ].
		( GraphVisualizer currentEdges ) do: [ :edge |  sys addEdge: ( edge src ) and: ( edge dest ) ]
! !

