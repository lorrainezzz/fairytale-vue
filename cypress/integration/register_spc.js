describe('User Register', () => {
  describe('Register with valid attributes.', function () {
    it('Register successfully and turn to login page', function () {
      cy.visit('/#/register')

      cy.contains(' Username:')
      cy.get('#input-live').type('Ann')
        .should('have.value', 'Ann')

      cy.get('#__BVID__39').type('112233')
        .should('have.value', '112233')
      cy.get('#input-rpsd').type('112233')
        .should('have.value', '112233')

      cy.get('#register\\ form > button').click()
    })
  })

  describe('Username or password is blank.', () => {
    it('Reminder for blank attributes.', () => {
      cy.visit('/#/register')
      cy.contains('Enter at least 3 letters')
      cy.contains('The password must be more than 5 digital')
    })
    it('Reminder for entering wrong different password in confirm password. ', () => {
      cy.visit('/#/register')

      cy.contains(' Username:')
      cy.get('#input-live').type('Ann')
        .should('have.value', 'Ann')


      cy.get('#__BVID__39')
        .type('112233')
        .should('have.value', '112233')
      cy.get('#input-rpsd')
        .type('123456')
        .should('have.value', '123456')

      cy.contains('Confirm password must be the same.')
    })
  })
})
