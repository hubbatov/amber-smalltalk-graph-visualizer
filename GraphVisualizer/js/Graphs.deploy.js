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
return smalltalk.withContext(function($ctx1) { pos=_st(_st(_st(self["@renderer"])._canvas())._asJQuery())._offset();
mousePosition=_st(arbor)._Point_y_(_st(_st(event)._pageX()).__minus(_st(pos)._left()),_st(_st(event)._pageY()).__minus(_st(pos)._top()));
return self}, function($ctx1) {$ctx1.fill(self,"getMousePositionForEvent:",{event:event,pos:pos,mousePosition:mousePosition},smalltalk.GraphMouseHandler)})},
messageSends: ["offset", "asJQuery", "canvas", "Point:y:", "-", "left", "pageX", "top", "pageY"]}),
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
_st($1)._fillStyle_("orange");
_st($1)._fillRect_y_width_height_(_st(_st(pt)._x()).__minus(_st(w).__slash((2))),_st(_st(pt)._y()).__minus(_st(w).__slash((2))),w,w);
_st($1)._fillStyle_("black");
_st($1)._font_("italic 13px sans-serif");
$2=_st($1)._fillText_x_y_(_st(node)._name(),_st(_st(pt)._x()).__plus((8)),_st(_st(pt)._y()).__plus((8)));
return self}, function($ctx1) {$ctx1.fill(self,"drawPoint:forNode:",{pt:pt,node:node,w:w},smalltalk.GraphRenderer)})},
messageSends: ["fillStyle:", "fillRect:y:width:height:", "-", "/", "x", "y", "font:", "fillText:x:y:", "name", "+"]}),
smalltalk.GraphRenderer);

smalltalk.addMethod(
"_initializeMouseHandling",
smalltalk.method({
selector: "initializeMouseHandling",
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { return self}, function($ctx1) {$ctx1.fill(self,"initializeMouseHandling",{},smalltalk.GraphRenderer)})},
messageSends: []}),
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
return self}, function($ctx1) {$ctx1.fill(self,"init",{var_:var_},smalltalk.GraphVisualizer)})},
messageSends: ["connection", "createSocket:", "processMessage:", "data", "new", "click:", "registerUser", "asJQuery", "getElementById:", "login"]}),
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
"_sys",
smalltalk.method({
selector: "sys",
fn: function (){
var self=this;
var renderer;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=self["@sys"];
if(($receiver = $1) == nil || $receiver == undefined){
self["@sys"]=_st(_st(arbor)._ParticleSystem())._value_((1000));
self["@sys"];
_st(self["@sys"])._parameters_(smalltalk.HashedCollection._fromPairs_([_st("gravity").__minus_gt(true)]));
renderer=_st(_st((smalltalk.GraphRenderer || GraphRenderer))._newWithCanvas_(_st(_st(_st("#").__comma("viewport"))._asJQuery())._at_((0))))._jsInterface();
renderer;
_st(_st(self["@sys"])._asJQuery())._attr_set_("renderer",renderer);
} else {
$1;
};
$2=self["@sys"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"sys",{renderer:renderer},smalltalk.GraphVisualizer.klass)})},
messageSends: ["ifNil:", "value:", "ParticleSystem", "parameters:", "->", "jsInterface", "newWithCanvas:", "at:", "asJQuery", ",", "attr:set:"]}),
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


