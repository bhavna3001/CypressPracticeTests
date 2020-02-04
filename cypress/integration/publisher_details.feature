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
    | Active                      |
    | Active - No password set yet |
    | Inactive                     |
    | Denied                       |


  

  

