"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var preact_redux_1 = require("preact-redux");
var store_1 = require("./store");
var app_1 = require("./app");
preact_1.render((preact_1.h(preact_redux_1.Provider, { store: store_1.store },
    preact_1.h("div", null,
        preact_1.h("h1", null, "Hello"),
        preact_1.h(app_1.default, { foo: "bar" })))), document.body);
