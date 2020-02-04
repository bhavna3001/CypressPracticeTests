Feature: Publisher basic details 

  Scenario: When I login into c000fey, I go to publisher page
    Given I successfully login in to c000fey
    Then I go to publisher details page

  Scenario: When I click on the publisher id field , publisher id is shown
    Given I click on the id field
    Then Publisher id should be shown in id field


  

  

