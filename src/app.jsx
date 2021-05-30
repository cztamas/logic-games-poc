'use strict';

const React = require('react');
const { useRoutes } = require('react-router-dom');
const ScopedCssBaseline = require('@material-ui/core/ScopedCssBaseline').default;
const AppBar = require('@material-ui/core/AppBar').default;
const ToolBar = require('@material-ui/core/ToolBar').default;
const Button = require('@material-ui/core/Button').default;

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
      <AppBar>
        <ToolBar>
          <Button color="inherit" href="#/">Vissza a főoldalra</Button>
        </ToolBar>
      </AppBar>
      <div className="app-container p2">
        { useRoutes(routes) }
      </div>
    </ScopedCssBaseline>
  );
};
