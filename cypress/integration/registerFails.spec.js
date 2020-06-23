describe('Register fails', () => {
    before(() => {
      cy.visit('/register');
    });
  
    it('fails', () => {
        cy.get('[data-type="email"]').clear().type('testesttest123@gmail.com');
        cy.get('[data-type="name"]').clear().type('Jowi');
        cy.get('[data-type="password"]').clear().invoke('val', '');
        cy.get('[data-type="password-repeat"]').clear().type('testesttest')
  
        cy.get('[type="submit"]').click();
        cy.get('.error').first().contains('Field is required');  
    });
  });
  