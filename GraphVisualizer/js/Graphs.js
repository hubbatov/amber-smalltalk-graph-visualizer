smalltalk.addPackage('Graphs');
smalltalk.addClass('GraphConnector', smalltalk.Object, ['socket'], 'Graphs');
smalltalk.addMethod(
"_connection",
smalltalk.method({
selector: "connection",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@socket"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"connection",{},smalltalk.GraphConnector)})},
args: [],
source: "connection\x0a\x09^socket",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphConnector);

smalltalk.addMethod(
"_createSocket_",
smalltalk.method({
selector: "createSocket:",
category: 'not yet classified',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@socket"]=_st((smalltalk.WebSocket || WebSocket))._value_("ws://localhost:9900/broadcast");
_st(self["@socket"])._onopen_((function(){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("Connection opened");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(self["@socket"])._onmessage_(aBlock);
_st(self["@socket"])._onclose_((function(){
return smalltalk.withContext(function($ctx2) {return _st(window)._alert_("Connection closed");
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"createSocket:",{aBlock:aBlock},smalltalk.GraphConnector)})},
args: ["aBlock"],
source: "createSocket: aBlock\x0a\x09socket := WebSocket  value: 'ws://localhost:9900/broadcast'.\x0a\x09socket onopen: [ window alert: 'Connection opened' ].\x0a\x09socket onmessage: aBlock.\x0a\x09socket onclose: [ window alert: 'Connection closed' ].",
messageSends: ["value:", "onopen:", "alert:", "onmessage:", "onclose:"],
referencedClasses: ["WebSocket"]
}),
smalltalk.GraphConnector);



smalltalk.addClass('GraphEdge', smalltalk.Object, ['src', 'dest'], 'Graphs');
smalltalk.addMethod(
"_dest",
smalltalk.method({
selector: "dest",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@dest"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"dest",{},smalltalk.GraphEdge)})},
args: [],
source: "dest\x0a\x09^dest",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphEdge);

smalltalk.addMethod(
"_dest_",
smalltalk.method({
selector: "dest:",
category: 'not yet classified',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@dest"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"dest:",{aNode:aNode},smalltalk.GraphEdge)})},
args: ["aNode"],
source: "dest: aNode\x0a\x09dest := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphEdge);

smalltalk.addMethod(
"_src",
smalltalk.method({
selector: "src",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@src"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"src",{},smalltalk.GraphEdge)})},
args: [],
source: "src\x0a\x09^src",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphEdge);

smalltalk.addMethod(
"_src_",
smalltalk.method({
selector: "src:",
category: 'not yet classified',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@src"]=aNode;
return self}, function($ctx1) {$ctx1.fill(self,"src:",{aNode:aNode},smalltalk.GraphEdge)})},
args: ["aNode"],
source: "src: aNode\x0a\x09src := aNode",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphEdge);



smalltalk.addClass('GraphNode', smalltalk.Object, ['name'], 'Graphs');
smalltalk.addMethod(
"_name",
smalltalk.method({
selector: "name",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1;
$1=self["@name"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"name",{},smalltalk.GraphNode)})},
args: [],
source: "name\x0a\x09^name",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphNode);

smalltalk.addMethod(
"_name_",
smalltalk.method({
selector: "name:",
category: 'not yet classified',
fn: function (aName){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@name"]=aName;
return self}, function($ctx1) {$ctx1.fill(self,"name:",{aName:aName},smalltalk.GraphNode)})},
args: ["aName"],
source: "name: aName\x0a\x09name := aName",
messageSends: [],
referencedClasses: []
}),
smalltalk.GraphNode);



smalltalk.addClass('GraphVisualizer', smalltalk.Object, ['socket', 'logged'], 'Graphs');
smalltalk.addMethod(
"_init",
smalltalk.method({
selector: "init",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { self["@socket"]=_st(_st(_st((smalltalk.GraphConnector || GraphConnector))._new())._createSocket_((function(evt){
return smalltalk.withContext(function($ctx2) {return _st(self)._processMessage_(_st(evt)._data());
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1)})})))._connection();
_st(_st(_st(document)._getElementById_("b_register"))._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._registerUser();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
_st(_st(_st(document)._getElementById_("b_login"))._asJQuery())._click_((function(){
return smalltalk.withContext(function($ctx2) {return _st(self)._login();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"init",{},smalltalk.GraphVisualizer)})},
args: [],
source: "init\x0a\x09socket := ( GraphConnector new createSocket: [ :evt | self processMessage: ( evt data ) ] ) connection.\x0a\x09( document getElementById: 'b_register' ) asJQuery click: [ self registerUser ].\x0a\x09( document getElementById: 'b_login' ) asJQuery click: [ self login ].",
messageSends: ["connection", "createSocket:", "processMessage:", "data", "new", "click:", "registerUser", "asJQuery", "getElementById:", "login"],
referencedClasses: ["GraphConnector"]
}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_isLogged",
smalltalk.method({
selector: "isLogged",
category: 'not yet classified',
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
args: [],
source: "isLogged\x0a\x09logged ifNil: [ logged := false ].\x0a\x09^logged",
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_login",
smalltalk.method({
selector: "login",
category: 'not yet classified',
fn: function (){
var self=this;
var login,password;
return smalltalk.withContext(function($ctx1) { login=_st(_st(document)._getElementById_("l_login"))._value();
password=_st(_st(document)._getElementById_("l_password"))._value();
_st(self["@socket"])._send_(_st(_st(_st(_st(_st(_st(_st("Login#ChatUser findByLogin: ").__comma("'")).__comma(login)).__comma("'")).__comma(" andPassword: ")).__comma("'")).__comma(password)).__comma("'"));
return self}, function($ctx1) {$ctx1.fill(self,"login",{login:login,password:password},smalltalk.GraphVisualizer)})},
args: [],
source: "login\x0a\x09\x09| login password|\x0a\x09\x09login := ( document getElementById: 'l_login' ) value.\x0a\x09\x09password := ( document getElementById: 'l_password' ) value.\x0a\x09\x09socket send: ( 'Login#ChatUser findByLogin: ', '''' , login, '''' , ' andPassword: ', '''', password, ''''  ) .",
messageSends: ["value", "getElementById:", "send:", ","],
referencedClasses: []
}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_processMessage_",
smalltalk.method({
selector: "processMessage:",
category: 'not yet classified',
fn: function (aMessage){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2,$3,$4,$5;
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
};
return self}, function($ctx1) {$ctx1.fill(self,"processMessage:",{aMessage:aMessage},smalltalk.GraphVisualizer)})},
args: ["aMessage"],
source: "processMessage: aMessage\x0a\x09\x0a\x09(aMessage match: 'Service#')  ifTrue: [ window alert: (aMessage replace: 'Service#' with: '') ].\x0a\x09(aMessage match: 'Login#')  ifTrue: [ window alert: (aMessage replace: 'Login#' with: ''). self showForms: true. socket send: 'GetUsers#'. logged := true ].\x0a\x09(aMessage match: 'Logout#')  ifTrue: [ window alert: (aMessage replace: 'Logout#' with: ''). self showForms: false. logged := false ].\x0a\x09\x0a\x09self isLogged ifTrue: [\x0a\x09\x09\x09\x09(aMessage match: 'Node#')  ifTrue: [ Compiler new evaluateExpression:  (aMessage replace: 'Node#' with: '') ] .\x0a].\x0a\x09",
messageSends: ["ifTrue:", "alert:", "replace:with:", "match:", "showForms:", "send:", "evaluateExpression:", "new", "isLogged"],
referencedClasses: ["Compiler"]
}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_registerUser",
smalltalk.method({
selector: "registerUser",
category: 'not yet classified',
fn: function (){
var self=this;
var name,surname,login,password;
return smalltalk.withContext(function($ctx1) { name=_st(_st(document)._getElementById_("r_username"))._value();
surname=_st(_st(document)._getElementById_("r_usersurname"))._value();
login=_st(_st(document)._getElementById_("r_login"))._value();
password=_st(_st(document)._getElementById_("r_password"))._value();
_st(self["@socket"])._send_(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st(_st("Register#ChatUser registerUser: (ChatUser new firstname: ").__comma("'")).__comma(name)).__comma("'")).__comma("; lastname: ")).__comma("'")).__comma(surname)).__comma("'")).__comma("; login: ")).__comma("'")).__comma(login)).__comma("'")).__comma("; password: ")).__comma("'")).__comma(password)).__comma("'")).__comma(")"));
return self}, function($ctx1) {$ctx1.fill(self,"registerUser",{name:name,surname:surname,login:login,password:password},smalltalk.GraphVisualizer)})},
args: [],
source: "registerUser\x0a\x09\x09|name surname login password|\x0a\x09\x09name := ( document getElementById: 'r_username' ) value.\x0a\x09\x09surname := ( document getElementById: 'r_usersurname' ) value.\x0a\x09\x09login := ( document getElementById: 'r_login' ) value.\x0a\x09\x09password := ( document getElementById: 'r_password' ) value.\x0a\x09\x09socket send: ( 'Register#ChatUser registerUser: (ChatUser new firstname: ', '''' , name, '''' , '; lastname: ', '''' , surname , '''' , '; login: ', '''' , login, '''' , '; password: ', '''', password, '''' ,')' ) .\x0a\x09\x0a\x09",
messageSends: ["value", "getElementById:", "send:", ","],
referencedClasses: []
}),
smalltalk.GraphVisualizer);

smalltalk.addMethod(
"_showForms_",
smalltalk.method({
selector: "showForms:",
category: 'not yet classified',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st(document)._getElementById_("registrationDiv"))._hidden_(aBoolean);
_st(_st(document)._getElementById_("loginDiv"))._hidden_(aBoolean);
return self}, function($ctx1) {$ctx1.fill(self,"showForms:",{aBoolean:aBoolean},smalltalk.GraphVisualizer)})},
args: ["aBoolean"],
source: "showForms: aBoolean\x0a\x09( document getElementById: 'registrationDiv' ) hidden: aBoolean.\x0a\x09( document getElementById: 'loginDiv' ) hidden: aBoolean.",
messageSends: ["hidden:", "getElementById:"],
referencedClasses: []
}),
smalltalk.GraphVisualizer);


smalltalk.GraphVisualizer.klass.iVarNames = ['nodes','edges'];
smalltalk.addMethod(
"_addEdge_to_",
smalltalk.method({
selector: "addEdge:to:",
category: 'not yet classified',
fn: function (aSrc,aDest){
var self=this;
return smalltalk.withContext(function($ctx1) { var $1,$2;
$1=_st((smalltalk.GraphEdge || GraphEdge))._new();
_st($1)._src_(aSrc);
$2=_st($1)._dest_(aDest);
_st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentEdges())._add_($2);
_st(self)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"addEdge:to:",{aSrc:aSrc,aDest:aDest},smalltalk.GraphVisualizer.klass)})},
args: ["aSrc", "aDest"],
source: "addEdge: aSrc to: aDest\x0a\x09\x09GraphVisualizer currentEdges add: ( GraphEdge new src: aSrc; dest: aDest ).\x0a\x09\x09self draw",
messageSends: ["add:", "src:", "new", "dest:", "currentEdges", "draw"],
referencedClasses: ["GraphEdge", "GraphVisualizer"]
}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_addNode_",
smalltalk.method({
selector: "addNode:",
category: 'not yet classified',
fn: function (aNode){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes())._add_(_st(_st((smalltalk.GraphNode || GraphNode))._new())._name_(aNode));
_st(self)._draw();
return self}, function($ctx1) {$ctx1.fill(self,"addNode:",{aNode:aNode},smalltalk.GraphVisualizer.klass)})},
args: ["aNode"],
source: "addNode: aNode\x0a\x09GraphVisualizer currentNodes add: (GraphNode new name: aNode) .\x0a\x09self draw",
messageSends: ["add:", "name:", "new", "currentNodes", "draw"],
referencedClasses: ["GraphNode", "GraphVisualizer"]
}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentEdges",
smalltalk.method({
selector: "currentEdges",
category: 'not yet classified',
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
args: [],
source: "currentEdges\x0a\x09edges ifNil: [ edges := Array new ] .\x0a\x09^edges",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentEdges_",
smalltalk.method({
selector: "currentEdges:",
category: 'not yet classified',
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
args: ["aArray"],
source: "currentEdges: aArray\x0a\x09aArray do: [ :each | self currentEdges add: (GraphEdge new src: (each src) ; dest: ( each dest )) ].",
messageSends: ["do:", "add:", "src:", "src", "new", "dest:", "dest", "currentEdges"],
referencedClasses: ["GraphEdge"]
}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentNodes",
smalltalk.method({
selector: "currentNodes",
category: 'not yet classified',
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
args: [],
source: "currentNodes\x0a\x09nodes ifNil: [ nodes := Array new ] .\x0a\x09^nodes",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Array"]
}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_currentNodes_",
smalltalk.method({
selector: "currentNodes:",
category: 'not yet classified',
fn: function (aArray){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(aArray)._do_((function(each){
return smalltalk.withContext(function($ctx2) {return _st(_st(self)._currentNodes())._add_(_st(_st((smalltalk.GraphNode || GraphNode))._new())._name_(_st(each)._name()));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"currentNodes:",{aArray:aArray},smalltalk.GraphVisualizer.klass)})},
args: ["aArray"],
source: "currentNodes: aArray\x0a\x09aArray do: [ :each | self currentNodes add: (GraphNode new name: (each name)) ].",
messageSends: ["do:", "add:", "name:", "name", "new", "currentNodes"],
referencedClasses: ["GraphNode"]
}),
smalltalk.GraphVisualizer.klass);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { _st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentNodes())._do_((function(node){
return smalltalk.withContext(function($ctx2) {return _st(sys)._addNode_(_st(node)._name());
}, function($ctx2) {$ctx2.fillBlock({node:node},$ctx1)})}));
_st(_st((smalltalk.GraphVisualizer || GraphVisualizer))._currentEdges())._do_((function(edge){
return smalltalk.withContext(function($ctx2) {return _st(sys)._addEdge_and_(_st(edge)._src(),_st(edge)._dest());
}, function($ctx2) {$ctx2.fillBlock({edge:edge},$ctx1)})}));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},smalltalk.GraphVisualizer.klass)})},
args: [],
source: "draw\x0a\x09\x09( GraphVisualizer currentNodes ) do: [ :node | sys addNode: ( node name ) ].\x0a\x09\x09( GraphVisualizer currentEdges ) do: [ :edge |  sys addEdge: ( edge src ) and: ( edge dest ) ]",
messageSends: ["do:", "addNode:", "name", "currentNodes", "addEdge:and:", "src", "dest", "currentEdges"],
referencedClasses: ["GraphVisualizer"]
}),
smalltalk.GraphVisualizer.klass);


