const {
    Before,
    After,
    Given,
    Then 
  } = require("cypress-cucumber-preprocessor/steps");
const common_elements = require("../pages/common_page");

Given("I successfully login in to c000fey", function(){
    cy.visit("https://c000fey-staging.skimlinks.com/index.php");
    cy.get(common_elements.user_name()).type(Cypress.env('USERNAME'));
    cy.get(common_elements.password()).type(Cypress.env('PASSWORD'));
    cy.contains("Login").click();
});

Then("I go to publisher basic details page",function(){
    cy.visit("https://c000fey-staging.skimlinks.com/index.php?menu=publisher_details&publisher_id=147909");
}); 