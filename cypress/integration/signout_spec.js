describe('Sign out', function() {
  it('sign out the account', function() {
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__24__BV_button_').click()
    cy.get(':nth-child(3) > .dropdown-item').click()
  })
})
