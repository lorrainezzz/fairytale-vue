describe('User Register', function() {
  it('Register with a new account', function() {
    cy.visit('/')

    cy.get('#__BVID__24__BV_button_').click()
    cy.get('#__BVID__24 > .dropdown-menu > :nth-child(1) > .dropdown-item > .fa').click()
    cy.get('a.btn').click()

    cy.get('#input-live')
      .type('tree')
      .should('have.value', 'tree')

    cy.get('#__BVID__51')
      .type('123456')
      .should('have.value', '123456')

    cy.get('#input-rpsd')
      .type('123456')
      .should('have.value', '123456')

    cy.get('.btn').click()
  })
})
