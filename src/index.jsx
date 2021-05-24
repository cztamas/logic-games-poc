'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const { HashRouter: Router } = require('react-router-dom');

const App = require('./app');

require('./style.scss');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
