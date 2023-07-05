import React from 'react';
import { Header } from './Header';

describe('<Header />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Header />);
    cy.get('header').should('exist');
    cy.get('.flex').should('exist');
    cy.contains('Where in the world?').should('exist');
    cy.contains('Dark Mode').should('exist');
  });
});
