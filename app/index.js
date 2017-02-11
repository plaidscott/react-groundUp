var React = require('react');
var ReactDom = require('react-dom');
var routes = require('./config/routes');

var Main = require('./components/Main');

ReactDom.render(
    routes
    , document.getElementById('root') );