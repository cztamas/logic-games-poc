'use strict';

const React = require('react');
const { render } = require('@testing-library/react');
const { HashRouter: Router } = require('react-router-dom');

exports.renderComponent = component => render(
  <Router>
    { component }
  </Router>
);
