const {
    Before,
    After,
    Given,
    Then,
    When
  } = require("cypress-cucumber-preprocessor/steps");

const publisher_details_page = require("../pages/publisher_details_page");

Given('I click on the id field',function(){
    cy.get(publisher_details_page.id_field()).click();
});

Given('I select for {string} in status field',function(status){
   cy.xpath(publisher_details_page.status_field()).select(status);
   
});

Given('I enter the company name',function(){
    cy.get(publisher_details_page.company_name()).clear();
    cy.get(publisher_details_page.company_name()).type("ABC company ltd.");
    
});

Given('I enter the primary contact',function(){
    cy.get(publisher_details_page.primary_contact()).clear();
    cy.get(publisher_details_page.primary_contact()).type("Bhavna QA");
})

Then('Publisher id should be shown in id field',function(){
    cy.get(publisher_details_page.id_field()).should('have.text','134658');
});

Then('publisher details updated successfully message is shown',function(){
    cy.get(publisher_details_page.Update_basic_Details()).click();
});

