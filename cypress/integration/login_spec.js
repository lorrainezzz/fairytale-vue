describe('Sign In Page', function () {
  it('Sign in successfully and turn to home page', function () {

    cy.visit('/#/login')
    cy.setCookie('name', 'caroline')
    cy.contains(' Username:')
    cy.contains(' Password:')
    cy.get('#__BVID__35')
      .type('caroline')
    cy.get('#__BVID__36')
      .type('123123')
    cy.get('#app > div > div > div > p > div > div:nth-child(6) > button').click()
    cy.url()
      .should('include', '/')
    cy.getCookie('name')
      .should('have.property', 'value', 'caroline')
  })

  it('Turn to the register page', function () {
    cy.get('#app > div > div > div > p > div > div:nth-child(6) > a').click()
    cy.url()
      .should('include', '/#/register')
    cy.getCookies().should('be.empty')
  })
})
