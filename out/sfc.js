"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var preact_redux_1 = require("preact-redux");
var SFC = function () { return (preact_1.h("div", null, "Functional component")); };
var mapStateToProps = function (state) { return ({
    todos: state.todos
}); };
var ConnectedSFC = preact_redux_1.connect(mapStateToProps)(SFC);
exports.default = ConnectedSFC;
