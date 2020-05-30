describe('Register', () => {
  before(() => {
    cy.visit('/register');
  });

  it('Can register', () => {
      cy.get('[data-type="email"]').clear().type('testesttest123@gmail.com');
      cy.get('[data-type="name"]').clear().type('Jowi');
      cy.get('[data-type="password"]').clear().type('testesttest')
      cy.get('[data-type="password-repeat"]').clear().type('testesttest')

      cy.get('[type="submit"]').click();
  });
});
