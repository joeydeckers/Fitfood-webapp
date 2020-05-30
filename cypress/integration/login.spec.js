describe('Login', () => {
    before(() => {
      cy.visit('/login');
    });
  
    it('Can login', () => {
        cy.get('[data-type="email"]').clear().type('testesttest123@gmail.com');
        cy.get('[data-type="password"]').clear().type('testesttest')
  
        cy.get('[type="submit"]').click();
    });
  });
  