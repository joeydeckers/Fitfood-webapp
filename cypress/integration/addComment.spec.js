describe('Add comment', () => {
    before(() => {
      cy.visit('/login');
    });
  
    it('Can add comment', () => {
        cy.get('[data-type="email"]').clear().type('testesttest123@gmail.com');
        cy.get('[data-type="password"]').clear().type('testesttest')
  
        cy.get('[type="submit"]').click();
        cy.visit('/recipe/3');
        cy.get('[data-type="comment"]').clear().type('Test from E2E');
        cy.get('[type="submit"]').click();
    });
  });
  