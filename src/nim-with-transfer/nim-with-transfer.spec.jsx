'use strict';

const React = require('react');
const { render } = require('@testing-library/react');
const NimWithTransfer = require('./nim-with-transfer');

describe('NimWithTransfer component', () => {
  it('should display something containing "furcsa játék"', () => {
    render(<NimWithTransfer />);

    const displayedText = document.querySelector('h1').textContent;
    expect(displayedText.toLowerCase().includes('furcsa játék')).toBe(true);
  });
});
