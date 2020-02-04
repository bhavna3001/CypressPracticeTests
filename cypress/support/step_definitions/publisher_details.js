const {
    Before,
    After,
    Given,
    Then 
  } = require("cypress-cucumber-preprocessor/steps");
const publisher_details_page = require("../pages/publisher_details_page");

Given("I successfully login in to c000fey", function(){
    cy.visit("https://c000fey-staging.skimlinks.com/index.php");
    cy.get(publisher_details_page.user_name()).type("bhavna.sharma");
    cy.get(publisher_details_page.password()).type("lm1OX0hvKVYNs9u5GUm68VKF");
    cy.contains("Login").click();
});

Given ('I click on the id field',function(){
    cy.get(publisher_details_page.id_field()).click();
});

 
Then ('I go to publisher details page',function(){
    cy.visit("https://c000fey-staging.skimlinks.com/index.php?menu=publisher_details&publisher_id=134658");
});

Then ('Publisher id should be shown in id field',function(){
    cy.get(publisher_details_page.id_field()).should('have.text','134658');
});
