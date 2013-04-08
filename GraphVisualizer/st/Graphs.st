Smalltalk current createPackage: 'Graphs'!
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
	instanceVariableNames: 'nodes edges'
	package: 'Graphs'!

!GraphVisualizer methodsFor: 'not yet classified'!

addEdge
	| nodeB nodeD |
	nodeB := document getElementById: 'newSrc'.
	nodeD := document getElementById: 'newDest'.
	nodeB ifNotNil: [ nodeD ifNotNil: [ self addEdge: (nodeB value) to: (nodeD value) ] ]
!

addEdge: aSrc to: aDest
		GraphVisualizer currentEdges add: ( GraphEdge new src: aSrc; dest: aDest ).
		self draw
!

addNode
	| node |
	node := document getElementById: 'newNodeName'.
	node ifNotNil: [ self addNode: ( node value ) ]
!

addNode: aNode
	GraphVisualizer currentNodes add: (GraphNode new name: aNode) .
	self draw
!

addOption: opText toList: aList
	| op |
	aList ifNotNil: [
	op := document createElement: 'option'.
	op appendChild: ( document createTextNode: opText ) .
	aList appendChild: op] .
!

clearOptions: aList
	1 to: ( aList length )do: [ aList options remove ].
!

draw
		| nodeB nodeE |

		nodeB := document getElementById: 'newSrc' .
		nodeE := document getElementById: 'newDest' .
		
		self clearOptions: nodeB.
		self clearOptions: nodeE.
		
		 (GraphVisualizer currentNodes ) do: [ :node | sys addNode: ( node name ). 
											             self addOption: ( node name ) toList: nodeB.
														 self addOption: ( node name ) toList: nodeE.	
										   ].
		( GraphVisualizer currentEdges ) do: [ :edge |  sys addEdge: ( edge src ) and: ( edge dest ) ]
!

init
	nodes := Array new.
	edges := Array new.
	document asJQuery ready: [  self loadData ].
!

loadData
	jQuery getJSON: 'data.json' process: [ : data |  GraphVisualizer currentNodes: ( data nodes ) . 
																			   GraphVisualizer currentEdges: ( data edges).
																			   self draw ].
!

saveData
	| data |
	data := sys asJSON.
	jQuery post: 'data1.json' string: data callback: [ :returnedData |  window alert: 'Data saved' ] .
! !

GraphVisualizer class instanceVariableNames: 'nodes edges'!

!GraphVisualizer class methodsFor: 'not yet classified'!

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
! !

