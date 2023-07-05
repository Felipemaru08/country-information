import React from 'react';
import { ContentLayout } from './ContentLayout';

describe('<ContentLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ContentLayout />);
    cy.get('.w-full').should('exist');
    cy.get('.mx-auto').should('exist');
    cy.get('.my-0').should('exist');
    cy.get('.p-4').should('exist');
  });
});
