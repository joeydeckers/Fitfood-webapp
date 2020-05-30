
describe('Create recipe', () => {
    before(() => {
      cy.visit('/recipe/create');
    });
  
    it('Can create recipe', () => {
        cy.get('[data-type="name"]').clear().type('helmond-sport');
        cy.get('[data-type="description"]').clear().type('helmond-sport');
        cy.get('[data-type="wheat-allergy"]').select('true');
        cy.get('[data-type="milk-allergy"]').select('true');
        cy.get('[data-type="description"]').clear().type('helmond');
        cy.get('[data-type="allergydescripion"]').clear().type('allergydescripion');
        cy.get('[data-type="daytime"]').select('Noon');
        cy.get('[data-type="protein"]').clear().type('2000');
        cy.get('[data-type="carbs"]').clear().type('2000');
        cy.get('[data-type="fats"]').clear().type('2000');
        cy.get('[data-type="calories"]').clear().type('2000');
        cy.get('[data-type="photo"]').attachFile('../../assets/spinach-chicken-pomegranate-salad-5938.jpg');
        cy.get('[type="submit"]').click();
    });
  });
  