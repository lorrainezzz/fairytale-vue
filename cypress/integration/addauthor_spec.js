describe('Add a new author', function() {
  it('Add a new author', function() {
    cy.visit('/')
    cy.setCookie('name', 'caroline')
    cy.get(':nth-child(4) > .nav-link').click()

    cy.get(':nth-child(2) > .form__input')
      .type('Hellen')
      .should('have.value', 'Hellen')

    cy.get('#type1')
      .select('Greek')

    cy.get(':nth-child(3) > .form__input')
      .type(1)

    cy.get('.btn').click()

  })
})
