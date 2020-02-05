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
   cy.get(publisher_details_page.Update_basic_Details()).click();
   
});

Given('I enter the company name',function(){
    cy.get(publisher_details_page.company_name()).clear();
    cy.get(publisher_details_page.company_name()).type("Bhavna test company ltd.");
    cy.get(publisher_details_page.Update_basic_Details()).click();
    
});

Given('I enter the primary contact',function(){
    cy.get(publisher_details_page.primary_contact()).clear();
    cy.get(publisher_details_page.primary_contact()).type("Bhavna QA");
    cy.get(publisher_details_page.Update_basic_Details()).click();
})

Given ('I select for {string} in account manager field',function(name){
        cy.get(publisher_details_page.account_manager()).select(name);
        cy.get(publisher_details_page.Update_basic_Details()).click();
        cy.get(publisher_details_page.account_manager()).should('contain.text',"Adam Westreich")

});

Given('I select for {string} in Sales manager field',function(name){
    cy.get(publisher_details_page.sales_manager()).select(name);
    cy.get(publisher_details_page.Update_basic_Details()).click();
    cy.get(publisher_details_page.sales_manager()).should('contain.text',"Alfredo Gil");
});

Given ('I enter the {string} in the contact {string}',function(field,value){
    if(field == "Contact_Email_Address"){
        cy.get(publisher_details_page.contact_email_address()).clear();
        cy.get(publisher_details_page.contact_email_address()).type(value);
    }
    else if(field == "Phone_Number"){
        cy.get(publisher_details_page.phone_number()).clear();
        cy.get(publisher_details_page.phone_number()).type(value);
    }
    else if(field == "Country"){
        cy.xpath(publisher_details_page.country()).select(value);
    }
    else if(field == "State"){
        cy.xpath(publisher_details_page.state()).select(value);
    }
    else if(field == "City"){
        cy.get(publisher_details_page.city()).clear();
        cy.get(publisher_details_page.city()).type(value);
    }
    else if(field == "Address_Line_1"){
        cy.get(publisher_details_page.Address_Line_1()).clear();
        cy.get(publisher_details_page.Address_Line_1()).type(value);
    }
    else if(field == "Address_Line_2"){
        cy.get(publisher_details_page.Address_Line_2()).clear();
        cy.get(publisher_details_page.Address_Line_2()).type(value);
    }
    else if(field == "Post_Code"){
        cy.get(publisher_details_page.Post_code()).clear();
        cy.get(publisher_details_page.Post_code()).type(value);
    }

    cy.get(publisher_details_page.Update_basic_Details()).click();

});
   
Given ("I select default currency", function(){
    cy.xpath(publisher_details_page.currency()).select("USD");
    cy.get(publisher_details_page.Update_basic_Details()).click();
});

Given ("I enter in the referrer field", function(){

    cy.get(publisher_details_page.referrer()).clear();
    cy.get(publisher_details_page.referrer()).type("referrer shown");
    cy.get(publisher_details_page.Update_basic_Details()).click();
});


Given ("I select the hub version", function(){

     cy.xpath(publisher_details_page.hub_version()).select("Basic");
     cy.get(publisher_details_page.Update_basic_Details()).click();
});

Given ('I enter in the Notes',function(){
      cy.get(publisher_details_page.note()).clear();
      cy.get(publisher_details_page.note()).type("This is tested");
      cy.get(publisher_details_page.Update_basic_Details()).click();
})

Given ('I click on the {string} field', function(field){
       if(field=="company name"){
        cy.get(publisher_details_page.company_name()).clear();
        cy.get(publisher_details_page.Update_basic_Details()).click();
       }
      else if(field=="primary contact"){
        cy.get(publisher_details_page.primary_contact()).clear();
        cy.get(publisher_details_page.Update_basic_Details()).click();
      }
      else if(field=="status"){
        cy.xpath(publisher_details_page.status_field()).select("Select status");
        cy.get(publisher_details_page.Update_basic_Details()).click();
      }
      else if(field=="Email address"){
        cy.get(publisher_details_page.contact_email_address()).clear();
        cy.get(publisher_details_page.Update_basic_Details()).click(); 
      }else if(field=="currency"){
        cy.xpath(publisher_details_page.currency()).select("Select default currency")
        cy.get(publisher_details_page.Update_basic_Details()).click(); 
      }

})



Then('Publisher id should be shown in id field',function(){
    cy.get(publisher_details_page.id_field()).should('have.text','134658');
});

Then('publisher details updated successfully message is shown',function(){
    cy.get(publisher_details_page.successful_message());
});

Then('Error is shown for the {string}',function(field){
    if(field=="company name"){
        cy.get(publisher_details_page.companyname_error());
       }
      else if(field=="primary contact"){
        cy.get(publisher_details_page.contact_error());
      }
      else if(field=="status"){
        cy.get(publisher_details_page.status_error());
       }
      else if(field=="Email address"){
        cy.get(publisher_details_page.email_error());
      }else if(field=="currency"){
        cy.get(publisher_details_page.currency_error());
      }
})



