smalltalk.addPackage('Graphs');
smalltalk.addClass('GraphConnector', smalltalk.Object, ['socket'], 'Graphs');
smalltalk.addMethod(
"_connection",
smalltalk.method({
selector: "connection",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@socket"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connection",{},smalltalk.GraphConnector)})},
messageSends: []}),
smalltalk.GraphConnector);

smalltalk.addMethod(
"_createSocket_",
smalltalk.method({
selector: "createSocket:",
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@socket"]=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_("WebSocket","ws://localhost:9900/broadcast");
_st(self["@socket"])._onopen_((function(){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("Connection opened");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@socket"])._onmessage_(aBlock);
_st(self["@socket"])._onclose_((function(){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("Connection closed");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createSocket:",{aBlock:aBlock},smalltalk.GraphConnector)})},
messageSends: ["constructor:value:", "onopen:", "alert:", "onmessage:", "onclose:"]}),
smalltalk.GraphConnector);



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



smalltalk.addClass('GraphMouseHandler', smalltalk.Object, ['dragged', 'handler', 'renderer'], 'Graphs');
smalltalk.addMethod(
"_clicked_",
smalltalk.method({
selector: "clicked:",
fn: function (event){
var self=this;
var mousePosition;
return smalltalk.withContext(function($ctx1) { var $1;
mousePosition=_st(self)._getMousePositionForEvent_(event);
self["@dragged"]=_st(_st(self["@renderer"])._particleSystem())._nearest_(mousePosition);
$1=_st(self)._draggedNotNil();
if(smalltalk.assert($1)){
_st(_st(self["@dragged"])._node())._fixed_(true);
};
_st(_st(_st(self["@renderer"])._canvas())._asJQuery())._bind_do_("mousemove",_st(self["@handler"])._at_("dragged"));
_st(_st(window)._asJQuery())._bind_do_("mouseup",_st(self["@handler"])._at_("dropped"));
return false;
}, function($ctx1) {$ctx1.fill(self,"clicked:",{event:event,mousePosition:mousePosition},smalltalk.GraphMouseHandler)})},
messageSends: ["getMousePositionForEvent:", "nearest:", "particleSystem", "ifTrue:", "fixed:", "node", "draggedNotNil", "bind:do:", "at:", "asJQuery", "canvas"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_createHandler",
smalltalk.method({
selector: "createHandler",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@handler"]=smalltalk.HashedCollection._fromPairs_([_st("clicked").__minus_gt((function(event){
return smalltalk.withContext(function($ctx2) {return _st(self)._clicked_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})})),_st("dragged").__minus_gt((function(event){
return smalltalk.withContext(function($ctx2) {return _st(self)._dragged_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})})),_st("dropped").__minus_gt((function(event){
return smalltalk.withContext(function($ctx2) {return _st(self)._dropped_(event);
}, function($ctx2) {$ctx2.fillBlock({event:event},$ctx1)})}))]);
return self}, function($ctx1) {$ctx1.fill(self,"createHandler",{},smalltalk.GraphMouseHandler)})},
messageSends: ["->", "clicked:", "dragged:", "dropped:"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_dragged_",
smalltalk.method({
selector: "dragged:",
fn: function (event){
var self=this;
var mousePosition;
return smalltalk.withContext(function($ctx1) { var $1;
mousePosition=_st(self)._getMousePositionForEvent_(event);
$1=_st(self)._draggedNotNil();
if(smalltalk.assert($1)){
p=_st(_st(self["@renderer"])._particleSystem())._fromScreen_(mousePosition);
p;
_st(_st(self["@dragged"])._node())._p_(p);
};
return false;
}, function($ctx1) {$ctx1.fill(self,"dragged:",{event:event,mousePosition:mousePosition},smalltalk.GraphMouseHandler)})},
messageSends: ["getMousePositionForEvent:", "ifTrue:", "fromScreen:", "particleSystem", "p:", "node", "draggedNotNil"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_draggedNotNil",
smalltalk.method({
selector: "draggedNotNil",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=_st(_st(self["@dragged"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {return _st(_st(self["@dragged"])._node())._notNil();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"draggedNotNil",{},smalltalk.GraphMouseHandler)})},
messageSends: ["and:", "notNil", "node"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_dropped_",
smalltalk.method({
selector: "dropped:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st(self)._draggedNotNil();
if(! smalltalk.assert($1)){
$2=self;
return $2;
};
_st(_st(self["@dragged"])._node())._fixed_(false);
self["@dragged"]=nil;
_st(_st(_st(self["@renderer"])._canvas())._asJQuery())._unbind_do_("mousemove",_st(self["@handler"])._at_("dragged"));
_st(_st(window)._asJQuery())._unbind_do_("mouseup",_st(self["@handler"])._at_("dropped"));
return false;
}, function($ctx1) {$ctx1.fill(self,"dropped:",{event:event},smalltalk.GraphMouseHandler)})},
messageSends: ["ifFalse:", "draggedNotNil", "fixed:", "node", "unbind:do:", "at:", "asJQuery", "canvas"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_getMousePositionForEvent_",
smalltalk.method({
selector: "getMousePositionForEvent:",
fn: function (event){
var self=this;
var pos,mousePosition;
return smalltalk.withContext(function($ctx1) { var $1;
pos=_st(_st(_st(self["@renderer"])._canvas())._asJQuery())._offset();
mousePosition=_st((smalltalk.NativeFunction || NativeFunction))._constructor_value_value_("arbor.Point",_st(_st(event)._pageX()).__minus(_st(pos)._left()),_st(_st(event)._pageY()).__minus(_st(pos)._top()));
$1=mousePosition;
return $1;
}, function($ctx1) {$ctx1.fill(self,"getMousePositionForEvent:",{event:event,pos:pos,mousePosition:mousePosition},smalltalk.GraphMouseHandler)})},
messageSends: ["offset", "asJQuery", "canvas", "constructor:value:value:", "-", "left", "pageX", "top", "pageY"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { smalltalk.Object.fn.prototype._initialize.apply(_st(self), []);
_st(self)._createHandler();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.GraphMouseHandler)})},
messageSends: ["initialize", "createHandler"]}),
smalltalk.GraphMouseHandler);

smalltalk.addMethod(
"_setRenderer_",
smalltalk.method({
selector: "setRenderer:",
fn: function (aRenderer){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@renderer"]=aRenderer;
_st(_st(_st(self["@renderer"])._canvas())._asJQuery())._mousedown_(_st(self["@handler"])._at_("clicked"));
return self}, function($ctx1) {$ctx1.fill(self,"setRenderer:",{aRenderer:aRenderer},smalltalk.GraphMouseHandler)})},
messageSends: ["mousedown:", "at:", "asJQuery", "canvas"]}),
smalltalk.GraphMouseHandler);


smalltalk.addMethod(
"_newForRenderer_",
smalltalk.method({
selector: "newForRenderer:",
fn: function (aRenderer){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setRenderer_(aRenderer);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newForRenderer:",{aRenderer:aRenderer},smalltalk.GraphMouseHandler.klass)})},
messageSends: ["setRenderer:", "new", "yourself"]}),
smalltalk.GraphMouseHandler.klass);


smalltalk.addClass('GraphMovableElement', smalltalk.Object, ['lastpos', 'move', 'form'], 'Graphs');
smalltalk.addMethod(
"_clicked_",
smalltalk.method({
selector: "clicked:",
fn: function (event){
var self=this;
var pos;
return smalltalk.withContext(function($ctx1) { pos=_st(_st(self["@form"])._asJQuery())._offset();
_st(_st(self)._lastpos())._x_(_st(_st(event)._pageX()).__plus(_st(pos)._left()));
_st(_st(self)._lastpos())._y_(_st(_st(event)._pageY()).__plus(_st(pos)._top()));
self["@move"]=true;
return self}, function($ctx1) {$ctx1.fill(self,"clicked:",{event:event,pos:pos},smalltalk.GraphMovableElement)})},
messageSends: ["offset", "asJQuery", "x:", "+", "left", "pageX", "lastpos", "y:", "top", "pageY"]}),
smalltalk.GraphMovableElement);

smalltalk.addMethod(
"_enableMoving_",
smalltalk.method({
selector: "enableMoving:",
fn: function (aDivId){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@form"]=_st(document)._getElementById_(aDivId);
_st(_st(self["@form"])._asJQuery())._mousedown_((function(ev){
return smalltalk.withContext(function($ctx2) {return _st(self)._clicked_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
_st(_st(self["@form"])._asJQuery())._mouseup_((function(ev){
return smalltalk.withContext(function($ctx2) {return _st(self)._released_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
_st(_st(self["@form"])._asJQuery())._mousemove_((function(ev){
return smalltalk.withContext(function($ctx2) {return _st(self)._moved_(ev);
}, function($ctx2) {$ctx2.fillBlock({ev:ev},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"enableMoving:",{aDivId:aDivId},smalltalk.GraphMovableElement)})},
messageSends: ["getElementById:", "mousedown:", "clicked:", "asJQuery", "mouseup:", "released:", "mousemove:", "moved:"]}),
smalltalk.GraphMovableElement);

smalltalk.addMethod(
"_lastpos",
smalltalk.method({
selector: "lastpos",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@lastpos"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@lastpos"]=_st((smalltalk.Point || Point))._new();
self["@lastpos"];
} else {
$1;
};
$2=self["@lastpos"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"lastpos",{},smalltalk.GraphMovableElement)})},
messageSends: ["ifNil:", "new"]}),
smalltalk.GraphMovableElement);

smalltalk.addMethod(
"_move",
smalltalk.method({
selector: "move",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@move"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@move"]=false;
self["@move"];
} else {
$1;
};
$2=self["@move"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"move",{},smalltalk.GraphMovableElement)})},
messageSends: ["ifNil:"]}),
smalltalk.GraphMovableElement);

smalltalk.addMethod(
"_moved_",
smalltalk.method({
selector: "moved:",
fn: function (event){
var self=this;
var temp;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
$1=_st(self)._move();
if(smalltalk.assert($1)){
temp=_st((smalltalk.Point || Point))._new();
temp;
$2=temp;
_st($2)._x_(_st(_st(self["@lastpos"])._x()).__minus(_st(event)._pageX()));
$3=_st($2)._y_(_st(_st(self["@lastpos"])._y()).__minus(_st(event)._pageY()));
$3;
_st(_st(self["@form"])._style())._position_("absolute");
_st(_st(self["@form"])._style())._left_(_st(_st(_st(_st(self["@lastpos"])._x()).__minus(_st(temp)._x()))._asString()).__comma("px"));
_st(_st(self["@form"])._style())._top_(_st(_st(_st(_st(self["@lastpos"])._y()).__minus(_st(temp)._y()))._asString()).__comma("px"));
$4=_st((smalltalk.Point || Point))._new();
_st($4)._x_(_st(_st(_st(self["@form"])._offset())._left()).__plus(_st(event)._pageX()));
$5=_st($4)._y_(_st(_st(_st(self["@form"])._offset())._top()).__plus(_st(event)._pageY()));
self["@lastpos"]=$5;
self["@lastpos"];
};
return self}, function($ctx1) {$ctx1.fill(self,"moved:",{event:event,temp:temp},smalltalk.GraphMovableElement)})},
messageSends: ["ifTrue:", "new", "x:", "-", "pageX", "x", "y:", "pageY", "y", "position:", "style", "left:", ",", "asString", "top:", "+", "left", "offset", "top", "move"]}),
smalltalk.GraphMovableElement);

smalltalk.addMethod(
"_released_",
smalltalk.method({
selector: "released:",
fn: function (event){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@move"]=false;
return self}, function($ctx1) {$ctx1.fill(self,"released:",{event:event},smalltalk.GraphMovableElement)})},
messageSends: []}),
smalltalk.GraphMovableElement);



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



smalltalk.addClass('GraphRenderer', smalltalk.Object, ['canvas', 'ctx', 'particleSystem', 'mouseHandler'], 'Graphs');
smalltalk.addMethod(
"_canvas",
smalltalk.method({
selector: "canvas",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@canvas"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"canvas",{},smalltalk.GraphRenderer)})},
messageSends: []}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_drawLineFrom_to_",
smalltalk.method({
selector: "drawLineFrom:to:",
fn: function (pt1,pt2){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@ctx"];
_st($1)._strokeStyle_("rgba(0,0,0, .333)");
_st($1)._lineWidth_((1));
_st($1)._beginPath();
_st($1)._moveTo_y_(_st(pt1)._x(),_st(pt1)._y());
_st($1)._lineTo_y_(_st(pt2)._x(),_st(pt2)._y());
$2=_st($1)._stroke();
return self}, function($ctx1) {$ctx1.fill(self,"drawLineFrom:to:",{pt1:pt1,pt2:pt2},smalltalk.GraphRenderer)})},
messageSends: ["strokeStyle:", "lineWidth:", "beginPath", "moveTo:y:", "x", "y", "lineTo:y:", "stroke"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_drawPoint_forNode_",
smalltalk.method({
selector: "drawPoint:forNode:",
fn: function (pt,node){
var self=this;
var w;
return smalltalk.withContext(function($ctx1) { var $1,$2;
w=(10);
$1=self["@ctx"];
_st($1)._fillStyle_(_st((smalltalk.GraphSettings || GraphSettings))._nodeColor());
_st($1)._beginPath();
_st($1)._arc_y_w_h_r_(_st(pt)._x(),_st(pt)._y(),_st((smalltalk.GraphSettings || GraphSettings))._nodeWidth(),(0),_st(_st((smalltalk.Math || Math))._PI()).__star((2)));
_st($1)._closePath();
_st($1)._fill();
_st($1)._fillStyle_(_st((smalltalk.GraphSettings || GraphSettings))._textColor());
_st($1)._font_(_st((smalltalk.GraphSettings || GraphSettings))._font());
$2=_st($1)._fillText_x_y_(_st(node)._name(),_st(_st(pt)._x()).__minus(_st(_st((smalltalk.GraphSettings || GraphSettings))._nodeWidth()).__star((2))),_st(_st(pt)._y()).__plus(_st(_st((smalltalk.GraphSettings || GraphSettings))._nodeWidth()).__star((2))));
return self}, function($ctx1) {$ctx1.fill(self,"drawPoint:forNode:",{pt:pt,node:node,w:w},smalltalk.GraphRenderer)})},
messageSends: ["fillStyle:", "nodeColor", "beginPath", "arc:y:w:h:r:", "x", "y", "nodeWidth", "*", "PI", "closePath", "fill", "textColor", "font:", "font", "fillText:x:y:", "name", "-", "+"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_initializeMouseHandling",
smalltalk.method({
selector: "initializeMouseHandling",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@mouseHandler"]=_st((smalltalk.GraphMouseHandler || GraphMouseHandler))._newForRenderer_(self);
return self}, function($ctx1) {$ctx1.fill(self,"initializeMouseHandling",{},smalltalk.GraphRenderer)})},
messageSends: ["newForRenderer:"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_initializeWithSystem_",
smalltalk.method({
selector: "initializeWithSystem:",
fn: function (aSystem){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
self["@particleSystem"]=aSystem;
$1=self["@particleSystem"];
_st($1)._screenSize_height_(_st(self["@canvas"])._width(),_st(self["@canvas"])._height());
$2=_st($1)._screenPadding_((80));
_st(self)._initializeMouseHandling();
return self}, function($ctx1) {$ctx1.fill(self,"initializeWithSystem:",{aSystem:aSystem},smalltalk.GraphRenderer)})},
messageSends: ["screenSize:height:", "width", "height", "screenPadding:", "initializeMouseHandling"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_jsInterface",
smalltalk.method({
selector: "jsInterface",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=smalltalk.HashedCollection._fromPairs_([_st("init").__minus_gt((function(system){
return smalltalk.withContext(function($ctx2) {return _st(self)._initializeWithSystem_(system);
}, function($ctx2) {$ctx2.fillBlock({system:system},$ctx1)})})),_st("redraw").__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._redraw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})})),_st("initializeMouseHandling").__minus_gt((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._initializeMouseHandling();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}))]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"jsInterface",{},smalltalk.GraphRenderer)})},
messageSends: ["->", "initializeWithSystem:", "redraw", "initializeMouseHandling"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_particleSystem",
smalltalk.method({
selector: "particleSystem",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@particleSystem"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"particleSystem",{},smalltalk.GraphRenderer)})},
messageSends: []}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_redraw",
smalltalk.method({
selector: "redraw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(self["@ctx"])._fillStyle_("white");
_st(self["@ctx"])._fillRect_y_width_height_((0),(0),_st(self["@canvas"])._width(),_st(self["@canvas"])._height());
_st(self["@particleSystem"])._eachEdge_((function(edge,pt1,pt2){
return smalltalk.withContext(function($ctx2) {return _st(self)._drawLineFrom_to_(pt1,pt2);
}, function($ctx2) {$ctx2.fillBlock({edge:edge,pt1:pt1,pt2:pt2},$ctx1)})}));
_st(self["@particleSystem"])._eachNode_((function(node,pt){
return smalltalk.withContext(function($ctx2) {return _st(self)._drawPoint_forNode_(pt,node);
}, function($ctx2) {$ctx2.fillBlock({node:node,pt:pt},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"redraw",{},smalltalk.GraphRenderer)})},
messageSends: ["fillStyle:", "fillRect:y:width:height:", "width", "height", "eachEdge:", "drawLineFrom:to:", "eachNode:", "drawPoint:forNode:"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_setCanvas_",
smalltalk.method({
selector: "setCanvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@canvas"]=aCanvas;
self["@ctx"]=_st(self["@canvas"])._getContext_("2d");
return self}, function($ctx1) {$ctx1.fill(self,"setCanvas:",{aCanvas:aCanvas},smalltalk.GraphRenderer)})},
messageSends: ["getContext:"]}),
smalltalk.GraphRenderer);


smalltalk.addMethod(
"_newWithCanvas_",
smalltalk.method({
selector: "newWithCanvas:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { var $2,$3,$1;
$2=_st(self)._new();
_st($2)._setCanvas_(aCanvas);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWithCanvas:",{aCanvas:aCanvas},smalltalk.GraphRenderer.klass)})},
messageSends: ["setCanvas:", "new", "yourself"]}),
smalltalk.GraphRenderer.klass);


smalltalk.addClass('GraphSettings', smalltalk.Object, [], 'Graphs');

smalltalk.GraphSettings.klass.iVarNames = ['font','nodeColor','nodeWidth','textColor'];
smalltalk.addMethod(
"_font",
smalltalk.method({
selector: "font",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@font"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@font"]="14px italic verdana";
self["@font"];
} else {
$1;
};
$2=self["@font"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"font",{},smalltalk.GraphSettings.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_font_",
smalltalk.method({
selector: "font:",
fn: function (aFont){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@font"]=aFont;
return self}, function($ctx1) {$ctx1.fill(self,"font:",{aFont:aFont},smalltalk.GraphSettings.klass)})},
messageSends: []}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_nodeColor",
smalltalk.method({
selector: "nodeColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nodeColor"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nodeColor"]="red";
self["@nodeColor"];
} else {
$1;
};
$2=self["@nodeColor"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"nodeColor",{},smalltalk.GraphSettings.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_nodeColor_",
smalltalk.method({
selector: "nodeColor:",
fn: function (aNodeColor){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodeColor"]=aNodeColor;
return self}, function($ctx1) {$ctx1.fill(self,"nodeColor:",{aNodeColor:aNodeColor},smalltalk.GraphSettings.klass)})},
messageSends: []}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_nodeWidth",
smalltalk.method({
selector: "nodeWidth",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@nodeWidth"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@nodeWidth"]=(10);
self["@nodeWidth"];
} else {
$1;
};
$2=self["@nodeWidth"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"nodeWidth",{},smalltalk.GraphSettings.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_nodeWidth_",
smalltalk.method({
selector: "nodeWidth:",
fn: function (aWidth){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@nodeWidth"]=aWidth;
return self}, function($ctx1) {$ctx1.fill(self,"nodeWidth:",{aWidth:aWidth},smalltalk.GraphSettings.klass)})},
messageSends: []}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_textColor",
smalltalk.method({
selector: "textColor",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@textColor"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@textColor"]="black";
self["@textColor"];
} else {
$1;
};
$2=self["@textColor"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"textColor",{},smalltalk.GraphSettings.klass)})},
messageSends: ["ifNil:"]}),
smalltalk.GraphSettings.klass);

smalltalk.addMethod(
"_textColor_",
smalltalk.method({
selector: "textColor:",
fn: function (aTextColor){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@textColor"]=aTextColor;
return self}, function($ctx1) {$ctx1.fill(self,"textColor:",{aTextColor:aTextColor},smalltalk.GraphSettings.klass)})},
messageSends: []}),
smalltalk.GraphSettings.klass);


smalltalk.addClass('GraphVisualizer', smalltalk.Object, ['socket', 'logged'], 'Graphs');
smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
fn: function (){
var self=this;
var var_;
return smalltalk.withContext(function($ctx1) { self["@socket"]=_st(_st(_st((smalltalk.GraphConnector || GraphConnector))._new())._createSocket_((function(evt){
return smalltalk.withContext(function($ctx2) {return _st(self)._processMessage_(_st(evt)._data());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})})))._connection();
_st(_st(_st(document)._getElementById_("b_register"))._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._registerUser();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(document)._getElementById_("b_login"))._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._login();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st((smalltalk.GraphMovableElement || GraphMovableElement))._new())._enableMoving_("functionsForm");
return self}, function($ctx1) {$ctx1.fill(self,"init",{var_:var_},smalltalk.GraphVisualizer)})},
messageSends: ["connection", "createSocket:", "processMessage:", "data", "new", "click:", "registerUser", "asJQuery", "getElementById:", "login", "enableMoving:"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_isLogged",
smalltalk.method({
selector: "isLogged",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@logged"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@logged"]=false;
self["@logged"];
} else {
$1;
};
$2=self["@logged"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"isLogged",{},smalltalk.GraphVisualizer)})},
messageSends: ["ifNil:"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_login",
smalltalk.method({
selector: "login",
fn: function (){
var self=this;
var login,password;
return smalltalk.withContext(function($ctx1) { login=_st(_st(document)._getElementById_("l_login"))._value();
password=_st(_st(document)._getElementById_("l_password"))._value();
_st(self["@socket"])._send_(_st(_st(_st(_st(_st(_st(_st("Login#ChatUser findByLogin: ").__comma("'")).__comma(login)).__comma("'")).__comma(" andPassword: ")).__comma("'")).__comma(password)).__comma("'"));
return self}, function($ctx1) {$ctx1.fill(self,"login",{login:login,password:password},smalltalk.GraphVisualizer)})},
messageSends: ["value", "getElementById:", "send:", ","]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5,$6;
$1=_st(aMessage)._match_("Service#");
if(smalltalk.assert($1)){
_st(window)._alert_(_st(aMessage)._replace_with_("Service#",""));
};
$2=_st(aMessage)._match_("Login#");
if(smalltalk.assert($2)){
_st(window)._alert_(_st(aMessage)._replace_with_("Login#",""));
_st(self)._showForms_(true);
_st(self["@socket"])._send_("GetUsers#");
self["@logged"]=true;
self["@logged"];
};
$3=_st(aMessage)._match_("Logout#");
if(smalltalk.assert($3)){
_st(window)._alert_(_st(aMessage)._replace_with_("Logout#",""));
_st(self)._showForms_(false);
self["@logged"]=false;
self["@logged"];
};
$4=_st(self)._isLogged();
if(smalltalk.assert($4)){
$5=_st(aMessage)._match_("Node#");
if(smalltalk.assert($5)){
_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(_st(aMessage)._replace_with_("Node#",""));
};
$6=_st(aMessage)._match_("Edge#");
if(smalltalk.assert($6)){
_st(_st((smalltalk.Compiler || Compiler))._new())._evaluateExpression_(_st(aMessage)._replace_with_("Edge#",""));
};
};
return self}, function($ctx1) {$ctx1.fill(self,"processMessage:",{aMessage:aMessage},smalltalk.GraphVisualizer)})},
messageSends: ["ifTrue:", "alert:", "replace:with:", "match:", "showForms:", "send:", "evaluateExpression:", "new", "isLogged"]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_registerUser",
smalltalk.method({
selector: "registerUser",
fn: function (){
var self=this;
var name,surname,login,password;
return smalltalk.withContext(function($ctx1) { name=_st(_st(document)._getElementById_("r_username"))._value();
surname=_st(_st(document)._getElementById_("r_usersurname"))._value();
login=_st(_st(document)._getElementById_("r_login"))._value();
password=_st(_st(document)._getElementById_("r_password"))._value();
_st(self["@socket"])._send_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st("Register#ChatUser registerUser: (ChatUser new firstname: ").__comma("'")).__comma(name)).__comma("'")).__comma("; lastname: ")).__comma("'")).__comma(surname)).__comma("'")).__comma("; login: ")).__comma("'")).__comma(login)).__comma("'")).__comma("; password: ")).__comma("'")).__comma(password)).__comma("'")).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"registerUser",{name:name,surname:surname,login:login,password:password},smalltalk.GraphVisualizer)})},
messageSends: ["value", "getElementById:", "send:", ","]}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_showForms_",
smalltalk.method({
selector: "showForms:",
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._getElementById_("registrationDiv"))._hidden_(aBoolean);
_st(_st(document)._getElementById_("loginDiv"))._hidden_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showForms:",{aBoolean:aBoolean},smalltalk.GraphVisualizer)})},
messageSends: ["hidden:", "getElementById:"]}),
smalltalk.GraphVisualizer);


smalltalk.GraphVisualizer.klass.iVarNames = ['nodes','edges','sys'];
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
return self}, function($ctx1) {$ctx1.fill(self,"addEdge:to:",{aSrc:aSrc,aDest:aDest},smalltalk.GraphVisualizer.klass)})},
messageSends: ["add:", "src:", "new", "dest:", "currentEdges", "draw"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes())._add_(_st(_st((smalltalk.GraphNode || GraphNode))._new())._name_(aNode));
_st(self)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},smalltalk.GraphVisualizer.klass)})},
messageSends: ["add:", "name:", "new", "currentNodes", "draw"]}),
smalltalk.GraphVisualizer.klass);

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

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes())._do_((function(node){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._sys())._addNode_(_st(node)._name());
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
_st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentEdges())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._sys())._addEdge_and_(_st(edge)._src(),_st(edge)._dest());
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.GraphVisualizer.klass)})},
messageSends: ["do:", "addNode:", "name", "sys", "currentNodes", "addEdge:and:", "src", "dest", "currentEdges"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_resize_",
smalltalk.method({
selector: "resize:",
fn: function (aCanvas){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aCanvas)._width_(_st(_st(window)._innerWidth()).__minus((20)));
_st(aCanvas)._height_(_st(_st(window)._innerHeight()).__minus((30)));
return self}, function($ctx1) {$ctx1.fill(self,"resize:",{aCanvas:aCanvas},smalltalk.GraphVisualizer.klass)})},
messageSends: ["width:", "-", "innerWidth", "height:", "innerHeight"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_sys",
smalltalk.method({
selector: "sys",
fn: function (){
var self=this;
var canvas,renderer;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@sys"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@sys"]=_st(_st(arbor)._ParticleSystem())._value_((1000));
self["@sys"];
_st(_st(_st(self["@sys"])._parameters())._asJQuery())._attr_value_("gravity",true);
canvas=_st((smalltalk.GraphRenderer || GraphRenderer))._newWithCanvas_(_st(_st(_st("#").__comma("viewport"))._asJQuery())._at_((0)));
canvas;
_st(self)._updateRendererWithCanvas_(_st(canvas)._canvas());
_st(window)._onresize_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._updateRendererWithCanvas_(_st(canvas)._canvas());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
} else {
$1;
};
$2=self["@sys"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"sys",{canvas:canvas,renderer:renderer},smalltalk.GraphVisualizer.klass)})},
messageSends: ["ifNil:", "value:", "ParticleSystem", "attr:value:", "asJQuery", "parameters", "newWithCanvas:", "at:", ",", "updateRendererWithCanvas:", "canvas", "onresize:"]}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_sys_",
smalltalk.method({
selector: "sys:",
fn: function (aSys){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@sys"]=aSys;
return self}, function($ctx1) {$ctx1.fill(self,"sys:",{aSys:aSys},smalltalk.GraphVisualizer.klass)})},
messageSends: []}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_updateRendererWithCanvas_",
smalltalk.method({
selector: "updateRendererWithCanvas:",
fn: function (aCanvas){
var self=this;
var newCanvas,newRenderer;
return smalltalk.withContext(function($ctx1) { _st(self)._resize_(aCanvas);
newCanvas=_st((smalltalk.GraphRenderer || GraphRenderer))._newWithCanvas_(_st(_st(_st("#").__comma("viewport"))._asJQuery())._at_((0)));
newRenderer=_st(newCanvas)._jsInterface();
_st(_st(self["@sys"])._asJQuery())._attr_set_("renderer",newRenderer);
return self}, function($ctx1) {$ctx1.fill(self,"updateRendererWithCanvas:",{aCanvas:aCanvas,newCanvas:newCanvas,newRenderer:newRenderer},smalltalk.GraphVisualizer.klass)})},
messageSends: ["resize:", "newWithCanvas:", "at:", "asJQuery", ",", "jsInterface", "attr:set:"]}),
smalltalk.GraphVisualizer.klass);


