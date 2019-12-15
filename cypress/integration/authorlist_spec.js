describe('Author list', function() {
  it('read the author list', function() {
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  })
  it('add a new author', function(){
    cy.setCookie('name', 'caroline')
    cy.get('tbody > :nth-child(1) > :nth-child(5)').click()
  })
  it('remove an author', function(){
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('tbody > :nth-child(1) > :nth-child(6)').click()

    cy.get('.swal2-confirm').click()
    cy.get('.swal2-confirm').click()
  })
  it('cancel to remove an author', function(){
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('tbody > :nth-child(1) > :nth-child(6)').click()

    cy.get('.swal2-cancel').click()
  })
  it('filter by author name', function(){
    cy.get('.VueTables__name-filter-wrapper > .form-control').type('Oui')
      .should('have.value', 'Oui')
  })
  it('filter by region', function(){
    cy.get('.VueTables__region-filter-wrapper > .form-control').type('Canadian')
      .should('have.value', 'Canadian')
  })

})
