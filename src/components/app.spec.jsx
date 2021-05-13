'use strict';

const React = require('react');
const { render } = require('@testing-library/react');
const App = require('./app');

describe('App component', () => {
  it('should display something containing "hello, world"', () => {
    render(<App />);

    const displayedText = document.querySelector('h1').textContent;
    expect(displayedText.toLowerCase().includes('hello, world')).toBe(true);
  });
});
