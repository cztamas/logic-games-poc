'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app');

require('./style.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
