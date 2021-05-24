'use strict';

const React = require('react');
const { renderComponent } = require('../../test-config/test-helpers');
const NimWithTransfer = require('./nim-with-transfer');

describe('NimWithTransfer component', () => {
  it('should display something containing "furcsa játék"', () => {
    renderComponent(<NimWithTransfer />);

    const displayedText = document.querySelector('h1').textContent;
    expect(displayedText.toLowerCase().includes('furcsa játék')).toBe(true);
  });
});
