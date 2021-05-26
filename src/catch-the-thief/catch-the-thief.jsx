'use strict';

const React = require('react');
const { Link } = require('react-router-dom');

module.exports = class CatchTheThief extends React.Component {
  render() {
    return (
      <div>
        <h1>Rablókergetős játék</h1>
        <Link to="/">Vissza a főoldalra</Link>
      </div>
    );
  }
};
