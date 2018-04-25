describe('Home', () => {

    beforeEach(() => {
      cy.visit('/home');
    });
  
    it('should have an email address', () => {
      cy.get('contactinfo-component').find('.contact-email')
        .should('have.length', 1)
        .first().should('have.text', 'some.email@somewhere.com');
    });
  
    // it('should add a name to the list using the form', () => {
    //   cy.get('sd-home form input').type('Tim Berners-Lee');
    //   cy.get('sd-home form button').click();
    //   cy.get('sd-home ul').find('li')
    //     .should('have.length', 5)
    //     .eq(4).should('have.text', 'Tim Berners-Lee');
    // });
  
  });
  