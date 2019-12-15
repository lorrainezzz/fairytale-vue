describe('My First Test', function() {
  it('find the "type', function() {
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@mail.com')
      .should('have.value', 'fake@mail.com')
  })
})
