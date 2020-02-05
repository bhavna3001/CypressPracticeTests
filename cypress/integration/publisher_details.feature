Feature: Publisher basic details 

  Background:
    Given I successfully login in to c000fey
    Then I go to publisher basic details page

  Scenario: When I click on the publisher id field , publisher id is shown
    Given I click on the id field
    Then Publisher id should be shown in id field

  Scenario Outline: When I select the <status> status, then <status> publisher list is shown
    Given I select for "<status>" in status field
    Then publisher details updated successfully message is shown
    Examples:
    | status                       |
    | Active                       |
    | Active - No password set yet |
    | Inactive                     |
    | Denied                       |

 
  Scenario: When I enter the company name, it should be updated in basic details
  Given I enter the company name
  Then publisher details updated successfully message is shown
  
  Scenario: When I enter the primary contact, it should be updated in basic details
   Given I enter the primary contact
   Then publisher details updated successfully message is shown


  Scenario Outline: When I select the <name> , publisher list is shown for the account manager
    Given I select for "<name>" in account manager field
    Then publisher details updated successfully message is shown
    Examples:
    | name            |
    | Adam Westreich  |
   

   Scenario Outline: When I select the <name> , publisher list is shown for the Sales manager
    Given I select for "<name>" in Sales manager field
    Then publisher details updated successfully message is shown
    Examples:
    | name          |
    | Alfredo Gil   |
    

  Scenario Outline: When I enter the <value> , Updated details should be shown in contact <field>
    Given I enter the "<field>" in the contact "<value>" 
    Then publisher details updated successfully message is shown 
    Examples:
    | field                 | value               |
    | Contact_Email_Address | Bhavna1@website.com |
    | Phone_Number          | 008996000           |
    | Country               | United States       |
    | State                 | California          |
    | City                  | Ohio                |
    | Address_Line_1        | 53 stand hs         |
    | Address_Line_2        | mk0hgw              |
    | Post_Code             | JH48H9              |


  Scenario: When I select currency, the updated currency should be shown
    Given I select default currency
    Then publisher details updated successfully message is shown 


  Scenario: When I enter Referrer , updated field should be shown
    Given I enter in the referrer field
    Then publisher details updated successfully message is shown 


  Scenario: When I select hub version, Updated field should be shown
    Given I select the hub version
    Then publisher details updated successfully message is shown 
  
  Scenario: When I enter some text in Notes, Updated field should be shown
    Given I enter in the Notes
    Then publisher details updated successfully message is shown
 @smoke
  Scenario Outline: Error is shown when <field> is left empty
    Given I click on the "<field>" field
    Then Error is shown for the "<field>"
    Examples:
    | field           | 
    | company name    | 
    | primary contact | 
    | status          | 
    | Email address   | 
    | currency        | 



  

  

