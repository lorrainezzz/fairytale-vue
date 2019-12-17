describe('Author list', function() {
  it('Read the author list', function() {
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
  })
  it('Add a new author', function(){
    cy.setCookie('name', 'caroline')
    cy.get('tbody > :nth-child(1) > :nth-child(5)').click()
  })
  it('Remove an author', function(){
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('tbody > :nth-child(1) > :nth-child(6)').click()

    cy.get('.swal2-confirm').click()
  })
  it('Cancel to remove an author', function(){
    cy.visit('/') // change URL to match your dev URL
    cy.setCookie('name', 'caroline')
    cy.get('#__BVID__12__BV_button_').click()
    cy.get('#__BVID__12 > .dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('tbody > :nth-child(1) > :nth-child(6)').click()

    cy.get('.swal2-cancel').click()
  })
  it('Filter by author name', function(){
    cy.setCookie('name', 'caroline')
    cy.visit('/#/fairytale')
    cy.get('.VueTables__author-filter-wrapper > .form-control').type('Oui')
      .should('have.value', 'Oui')
  })
  it('Filter by region', function(){
    cy.setCookie('name', 'caroline')
    cy.visit('/#/fairytale')
    cy.get('.VueTables__category-filter-wrapper > .form-control').type('Canadian')
      .should('have.value', 'Canadian')
  })

})
