describe('Reset Password', function() {
  it('Reset Password', function() {
    cy.setCookie('name', 'caroline')
    cy.visit('/') // change URL to match your dev URL

    cy.get('#__BVID__24__BV_button_').click()
    cy.get('#__BVID__24 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('.btn').click()

    cy.get('#__BVID__45')
      .type('123123')
      .should('have.value', '123123')

    cy.get('#__BVID__46')
      .type('112233')
      .should('have.value', '112233')

    cy.get('#__BVID__47')
      .type('112233')
      .should('have.value', '112233')

    cy.get(':nth-child(1) > .btn').click()


  })
})
