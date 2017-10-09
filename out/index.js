"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var app_1 = require("./app");
preact_1.render((preact_1.h("div", null,
    preact_1.h("h1", null, "Hello"),
    preact_1.h(app_1.default, { foo: "bar" }))), document.body);
