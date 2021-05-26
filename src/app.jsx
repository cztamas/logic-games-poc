'use strict';

const React = require('react');
const { useRoutes } = require('react-router-dom');
const ScopedCssBaseline = require('@material-ui/core/ScopedCssBaseline').default;

const Overview = require('./overview');
const NimWithTransfer = require('./nim-with-transfer/nim-with-transfer');
const UselessExampleGame = require('./useless-example-game/useless-example-game');
const CatchTheThief = require('./catch-the-thief/catch-the-thief');

const routes = [
  { path: '/', element: <Overview /> },
  { path: '/strange', element: <NimWithTransfer /> },
  { path: '/useless', element: <UselessExampleGame /> },
  { path: '/catch-the-thief', element: <CatchTheThief /> }
];

module.exports = function App() {
  return (
    <ScopedCssBaseline>
      { useRoutes(routes) }
    </ScopedCssBaseline>
  );
};
