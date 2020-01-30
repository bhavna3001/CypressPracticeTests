Feature: Publisher basic details 


Background:
  Given I successfully login in to c000fey
  Then I go to publisher basic details page

  Scenario: Publisher id should be shown in the id field on the publisher basic details page
  Given I click on the id field
  Then Publisher id should be shown in id field




