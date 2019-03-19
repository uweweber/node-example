"use strict";
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var App = (function () {
    function App() {
        this.express = express();
        this.middleware();
    }
    App.prototype.testMethod = function () {
        console.log('testMethod ........');
    };
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    return App;
}());
module.exports = App;
//# sourceMappingURL=App.js.map