describe('User Login', function() {
  it('Login with an exited account', function() {
    cy.visit('/')

    cy.get('#__BVID__24__BV_button_').click()

    cy.get('#__BVID__24 > .dropdown-menu > :nth-child(1) > .dropdown-item > .fa').click()

    cy.get('#__BVID__42')
      .type('tree')
      .should('have.value', 'tree')

    cy.get('#__BVID__43')
      .type('123456')
      .should('have.value', '123456')

    cy.get('button.btn').click()
  })
})
