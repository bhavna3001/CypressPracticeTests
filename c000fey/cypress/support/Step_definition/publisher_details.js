import {
    Given,
    When,
    Then,
    And
} from "cypress-cucumber-preprocessor/steps";
const publisher_details_page = require("../pages/publisher_details_page")

Given('Publisher id should be shown in the id field on the publisher basic details page', function(){

 cy.get(publisher_details_page.id_field()).click().should('have.text','134658');


});