"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var ACTIONS = {
    ADD_TODO: function (prevState, action) {
        var todos = prevState.todos, state = __rest(prevState, ["todos"]);
        var text = action.text;
        return __assign({ todos: todos.concat([{
                    id: Math.random().toString(36).substring(2),
                    text: text
                }]) }, state);
    }
};
var INITIAL_STATE = {
    todos: []
};
exports.store = redux_1.createStore(function (state, action) { return (action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state); }, INITIAL_STATE, devToolsExtension && devToolsExtension());
