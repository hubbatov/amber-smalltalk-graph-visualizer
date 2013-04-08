smalltalk.addPackage('Graphs');
smalltalk.addClass('GraphEdge', smalltalk.Object, ['src', 'dest'], 'Graphs');
smalltalk.addMethod(
"_dest",
smalltalk.method({
selector: "dest",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@dest"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dest",{},smalltalk.GraphEdge)})},
messageSends: []}),
smalltalk.GraphEdge);

smalltalk.addMethod(
"_dest_",
smalltalk.method({
selector: "dest:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@dest"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"dest:",{aNode:aNode},smalltalk.GraphEdge)})},
messageSends: []}),
smalltalk.GraphEdge);

smalltalk.addMethod(
"_src",
smalltalk.method({
selector: "src",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@src"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"src",{},smalltalk.GraphEdge)})},
messageSends: []}),
smalltalk.GraphEdge);

smalltalk.addMethod(
"_src_",
smalltalk.method({
selector: "src:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@src"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"src:",{aNode:aNode},smalltalk.GraphEdge)})},
messageSends: []}),
smalltalk.GraphEdge);



smalltalk.addClass('GraphNode', smalltalk.Object, ['name'], 'Graphs');
smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.GraphNode)})},
messageSends: []}),
smalltalk.GraphNode);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aName:aName},smalltalk.GraphNode)})},
messageSends: []}),
smalltalk.GraphNode);



smalltalk.addClass('GraphVisualizer', smalltalk.Object, ['nodes', 'edges'], 'Graphs');
smalltalk.addMethod(
"_addEdge",
smalltalk.method({
selector: "addEdge",
fn: function (){
var self=this;
var nodeB,nodeD;
return smalltalk.withContext(function($ctx1) { var $1,$2;
nodeB=_st(document)._getElementById_("newSrc");
nodeD=_st(document)._getElementById_("newDest");
$1=nodeB;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
$2=nodeD;
if(($receiver = $2) == nil || $receiver == undefined){
$2;
} else {
_st(self)._addEdge_to_(_st(nodeB)._value(),_st(nodeD)._value());
};
};
return self}, function($ctx1) {$ctx1.fill(self,"addEdge",{nodeB:nodeB,nodeD:nodeD},smalltalk.GraphVisualizer)})},
messageSends: ["getElementById:", "ifNotNil:", "addEdge:to:", "value"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_addEdge_to_",
smalltalk.method({
selector: "addEdge:to:",
fn: function (aSrc,aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.GraphEdge || GraphEdge))._new();
_st($1)._src_(aSrc);
$2=_st($1)._dest_(aDest);
_st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentEdges())._add_($2);
_st(self)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"addEdge:to:",{aSrc:aSrc,aDest:aDest},smalltalk.GraphVisualizer)})},
messageSends: ["add:", "src:", "new", "dest:", "currentEdges", "draw"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_addNode",
smalltalk.method({
selector: "addNode",
fn: function (){
var self=this;
var node;
return smalltalk.withContext(function($ctx1) { var $1;
node=_st(document)._getElementById_("newNodeName");
$1=node;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
_st(self)._addNode_(_st(node)._value());
};
return self}, function($ctx1) {$ctx1.fill(self,"addNode",{node:node},smalltalk.GraphVisualizer)})},
messageSends: ["getElementById:", "ifNotNil:", "addNode:", "value"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes())._add_(_st(_st((smalltalk.GraphNode || GraphNode))._new())._name_(aNode));
_st(self)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},smalltalk.GraphVisualizer)})},
messageSends: ["add:", "name:", "new", "currentNodes", "draw"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_addOption_toList_",
smalltalk.method({
selector: "addOption:toList:",
fn: function (opText,aList){
var self=this;
var op;
return smalltalk.withContext(function($ctx1) { var $1;
$1=aList;
if(($receiver = $1) == nil || $receiver == undefined){
$1;
} else {
op=_st(document)._createElement_("option");
op;
_st(op)._appendChild_(_st(document)._createTextNode_(opText));
_st(aList)._appendChild_(op);
};
return self}, function($ctx1) {$ctx1.fill(self,"addOption:toList:",{opText:opText,aList:aList,op:op},smalltalk.GraphVisualizer)})},
messageSends: ["ifNotNil:", "createElement:", "appendChild:", "createTextNode:"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_clearOptions_",
smalltalk.method({
selector: "clearOptions:",
fn: function (aList){
var self=this;
return smalltalk.withContext(function($ctx1) { _st((1))._to_do_(_st(aList)._length(),(function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(aList)._options())._remove();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"clearOptions:",{aList:aList},smalltalk.GraphVisualizer)})},
messageSends: ["to:do:", "length", "remove", "options"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
var nodeB,nodeE;
return smalltalk.withContext(function($ctx1) { nodeB=_st(document)._getElementById_("newSrc");
nodeE=_st(document)._getElementById_("newDest");
_st(self)._clearOptions_(nodeB);
_st(self)._clearOptions_(nodeE);
_st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes())._do_((function(node){
return smalltalk.withContext(function($ctx2) {_st(sys)._addNode_(_st(node)._name());
_st(self)._addOption_toList_(_st(node)._name(),nodeB);
return _st(self)._addOption_toList_(_st(node)._name(),nodeE);
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
_st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentEdges())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {return _st(sys)._addEdge_and_(_st(edge)._src(),_st(edge)._dest());
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{nodeB:nodeB,nodeE:nodeE},smalltalk.GraphVisualizer)})},
messageSends: ["getElementById:", "clearOptions:", "do:", "addNode:", "name", "addOption:toList:", "currentNodes", "addEdge:and:", "src", "dest", "currentEdges"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodes"]=_st((smalltalk.Array || Array))._new();
self["@edges"]=_st((smalltalk.Array || Array))._new();
_st(_st(document)._asJQuery())._ready_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._loadData();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.GraphVisualizer)})},
messageSends: ["new", "ready:", "loadData", "asJQuery"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_loadData",
smalltalk.method({
selector: "loadData",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(jQuery)._getJSON_process_("data.json",(function(data){
return smalltalk.withContext(function($ctx2) {_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes_(_st(data)._nodes());
_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentEdges_(_st(data)._edges());
return _st(self)._draw();
}, function($ctx2) {$ctx2.fillBlock({data:data},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"loadData",{},smalltalk.GraphVisualizer)})},
messageSends: ["getJSON:process:", "currentNodes:", "nodes", "currentEdges:", "edges", "draw"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_saveData",
smalltalk.method({
selector: "saveData",
fn: function (){
var self=this;
var data;
return smalltalk.withContext(function($ctx1) { data=_st(sys)._asJSON();
_st(jQuery)._post_string_callback_("data1.json",data,(function(returnedData){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("Data saved");
}, function($ctx2) {$ctx2.fillBlock({returnedData:returnedData},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"saveData",{data:data},smalltalk.GraphVisualizer)})},
messageSends: ["asJSON", "post:string:callback:", "alert:"]}),
smalltalk.GraphVisualizer);


smalltalk.GraphVisualizer.klass.iVarNames = ['nodes','edges'];
smalltalk.addMethod(
"_currentEdges",
smalltalk.method({
selector: "currentEdges",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@edges"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@edges"]=_st((smalltalk.Array || Array))._new();
self["@edges"];
} else {
$1;
};
$2=self["@edges"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentEdges",{},smalltalk.GraphVisualizer.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentEdges_",
smalltalk.method({
selector: "currentEdges:",
fn: function (aArray){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
_st(aArray)._do_((function(each){
return smalltalk.withContext(function($ctx2) {$1=_st((smalltalk.GraphEdge || GraphEdge))._new();
_st($1)._src_(_st(each)._src());
$2=_st($1)._dest_(_st(each)._dest());
return _st(_st(self)._currentEdges())._add_($2);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentEdges:",{aArray:aArray},smalltalk.GraphVisualizer.klass)})},
messageSends: ["do:", "add:", "src:", "src", "new", "dest:", "dest", "currentEdges"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentNodes",
smalltalk.method({
selector: "currentNodes",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nodes"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nodes"]=_st((smalltalk.Array || Array))._new();
self["@nodes"];
} else {
$1;
};
$2=self["@nodes"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"currentNodes",{},smalltalk.GraphVisualizer.klass)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentNodes_",
smalltalk.method({
selector: "currentNodes:",
fn: function (aArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aArray)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._currentNodes())._add_(_st(_st((smalltalk.GraphNode || GraphNode))._new())._name_(_st(each)._name()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentNodes:",{aArray:aArray},smalltalk.GraphVisualizer.klass)})},
messageSends: ["do:", "add:", "name:", "name", "new", "currentNodes"]}),
smalltalk.GraphVisualizer.klass);


