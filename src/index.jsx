'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/app');

require('./style.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
