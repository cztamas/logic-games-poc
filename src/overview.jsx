'use strict';

const React = require('react');
const { Link } = require('react-router-dom');

module.exports = function Overview() {
  return (
    <div>
      <h1>Válassz egy játékot!</h1>
      <Link to="/strange">Furcsa játék</Link><br />
      <Link to="/useless">Ostoba játék</Link><br />
      <Link to="/catch-the-thief">Rablókergetős játék</Link>
    </div>
  );
};
