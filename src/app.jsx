'use strict';

const React = require('react');
const { useRoutes } = require('react-router-dom');
const ScopedCssBaseline = require('@material-ui/core/ScopedCssBaseline').default;

const Overview = require('./overview');
const NimWithTransfer = require('./nim-with-transfer/nim-with-transfer');
const UselessExampleGame = require('./useless-example-game/useless-example-game');

const routes = [
  { path: '/', element: <Overview /> },
  { path: '/strange', element: <NimWithTransfer /> },
  { path: '/useless', element: <UselessExampleGame /> },
];

module.exports = function App() {
  return (
    <ScopedCssBaseline>
      { useRoutes(routes) }
    </ScopedCssBaseline>
  );
};
