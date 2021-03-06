"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preact_1 = require("preact");
var preact_redux_1 = require("preact-redux");
var sfc_1 = require("./sfc");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (preact_1.h("div", { className: "app-component" },
            preact_1.h(sfc_1.default, null),
            this.props.foo));
    };
    return App;
}(preact_1.Component));
var mapStateToProps = function (state) { return ({
    todos: state.todos
}); };
var ConnectedApp = preact_redux_1.connect(mapStateToProps)(App);
exports.default = ConnectedApp;
