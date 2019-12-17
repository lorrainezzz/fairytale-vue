describe('Reset Password', function() {
  it('Reset Password successfully.', function() {
    cy.setCookie('name', 'caroline')
    cy.visit('/') // change URL to match your dev URL

    cy.get('#__BVID__24__BV_button_').click()
    cy.get('#__BVID__24 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('.btn').click()

    cy.get('#__BVID__45')
      .type('112233')
      .should('have.value', '112233')

    cy.get('#__BVID__46')
      .type('112233')
      .should('have.value', '112233')
    cy.get(':nth-child(1) > .btn').click()
  })
  it('Fail to reset with the password and confirm password blank.', function () {
    cy.setCookie('name', 'caroline')
    cy.visit('/#/changePsd')

    cy.contains('The new password must be different from the original one')
    cy.contains('The password must be the same as the former one')
  })

})
