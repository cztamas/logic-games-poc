'use strict';

const React = require('react');
const { minBy, maxBy, flatMap } = require('lodash');

const gridSizeInPercentage = 10;
const graph = [
  { id: 0, row: 0, column: 0, connected: [1, 2, 6] },
  { id: 1, row: 0, column: 4, connected: [0, 3, 7] },
  { id: 2, row: 1, column: 1, connected: [0, 3, 4] },
  { id: 3, row: 1, column: 3, connected: [1, 2, 5] },
  { id: 4, row: 3, column: 1, connected: [2, 5, 6] },
  { id: 5, row: 3, column: 3, connected: [3, 4, 7] },
  { id: 6, row: 4, column: 0, connected: [0, 4, 7] },
  { id: 7, row: 4, column: 4, connected: [1, 5, 6] },
];
const edges = flatMap(graph, node => node.connected.map(endId => ({ start: node.id, end: endId })));
const minColumn = minBy(graph, 'column').column;
const maxColumn = maxBy(graph, 'column').column;
const centerColumn = (minColumn + maxColumn) / 2;
const graphNodeById = id => graph.find(node => node.id === id);
const coordinates = (row, column) => ({
  x: (column - centerColumn) * gridSizeInPercentage + 50,
  y: row * gridSizeInPercentage + 10
});

module.exports = class CatchTheThief extends React.Component {
  node(id) {
    const graphNode = graphNodeById(id);
    const { x, y } = coordinates(graphNode.row, graphNode.column);

    return <circle fill="black" cx={ x } cy={ y } key={ id } r="1.5"></circle>;
  }

  connection(startNodeId, endNodeId) {
    const startNode = graphNodeById(startNodeId);
    const endNode = graphNodeById(endNodeId);
    const { x: x1, y: y1 } = coordinates(startNode.row, startNode.column);
    const { x: x2, y: y2 } = coordinates(endNode.row, endNode.column);
    const id = `${startNodeId}-${endNodeId}`;

    return <line stroke="black" strokeWidth="0.6" x1={ x1 } y1={ y1 } x2={ x2 } y2={ y2 } key={ id } />;
  }

  board() {
    return (
      <svg viewBox="0 0 100 100">
        { graph.map(({ id, row, column }) => this.node(id, row, column)) }
        { edges.map(({ start, end }) => this.connection(start, end))}
      </svg>
    );
  }

  render() {
    return (
      <div>
        <h1 className="h1 mb2">Rablókergetős játék</h1>
        { this.board() }
      </div>
    );
  }
};
