describe('Add a new fairy tale', function() {
  it('Add a new fairy tale', function() {
    cy.visit('/')
    cy.setCookie('name', 'caroline')
    cy.get(':nth-child(3) > .nav-link').click()

    cy.get(':nth-child(1) > :nth-child(2) > .form__input')
      .type('Flower')
      .should('have.value', 'Flower')

    cy.get(':nth-child(2) > :nth-child(2) > .form__input')
      .type('Hellen')
      .should('have.value', 'Hellen')

    cy.get('#type').select('Kids')

    cy.get('.btn').click()
  })
})
