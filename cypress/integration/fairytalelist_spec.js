describe('Fairy tale list', function () {
  it('read the fairy tale list', function () {
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()

    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(1) > .dropdown-item').click()
  })
  it('like the fairy tale', function () {
    cy.setCookie('name', 'caroline')
    cy.get('tbody > :nth-child(1) > :nth-child(6)').click()
  })
  it('remove the fairy tale', function () {
    cy.setCookie('name', 'caroline')
    cy.get(':nth-child(4) > :nth-child(7)').click()
    cy.get('.swal2-confirm').click()
  })
  it('filter by author', function () {
    cy.setCookie('name', 'caroline')
    cy.visit('http://localhost:8080/#/fairytale')
    cy.get('.VueTables__author-filter-wrapper > .form-control').type('Dollar')
      .should('have.value', 'Dollar')
  })
  it('filter by author', function () {
    cy.setCookie('name', 'caroline')
    cy.visit('http://localhost:8080/#/fairytale')
    cy.get('.VueTables__category-filter-wrapper > .form-control')
      .type('Kids')
      .should('have.value', 'Kids')
  })
})
