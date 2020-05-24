describe('Register', () => {
  before(() => {
    cy.visit('/register');
  });

  it('Can register', () => {
      cy.get('[data-type="email"]').clear().type('jowiDeckers@gmail.com');
      cy.get('[data-type="name"]').clear().type('Jowi');
      cy.get('[data-type="password"]').clear().type('Test123')
      cy.get('[data-type="password-repeat"]').clear().type('Test123')

      cy.get('[type="submit"]').click();
  });
});
