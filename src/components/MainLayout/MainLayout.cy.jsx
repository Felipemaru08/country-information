import React from 'react';
import { MainLayout } from './MainLayout';

describe('<MainLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const headerContent = <h1>Header</h1>;
    const footerContent = <footer>Footer</footer>;
    const mainContent = <p>Main Content</p>;
    cy.mount(
      <MainLayout
        header={headerContent}
        footer={footerContent}
        className='custom-class'
      >
        {mainContent}
      </MainLayout>
    );
    cy.get('.hb-MainLayout').should('exist');
    cy.get('.hb-MainLayout__header').should('contain', 'Header');
    cy.get('.hb-MainLayout__footer').should('contain', 'Footer');
    cy.get('.hb-MainLayout__children').should('contain', 'Main Content');
    cy.get('.hb-MainLayout').should('have.class', 'custom-class');
  });
});
