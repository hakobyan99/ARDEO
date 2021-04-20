Feature: LRAP history

  Background:
    Given I login with creds username & password
    When I create new institution
    Then I check added institution modal is opened


  Scenario: Edit award process setup information
    Given I create new LRAP history
    And I go to "Award process setup"
    And I select "2019 - 2020" cohort
    And I click on "Edit" button
    And I fill edit modal's fields
    And I click on "Save" button
    And I check the photos is added
    When I click on "Close" button
    Then I go to "History" tab and delete institution


  Scenario: Adding new LRAP histories with same names and different cohorts
    Given I click on the "New" button to create new history
    And I fill "Institution Student Type" fields
    When I click on "save" button
    Then I go to "Cap & Waitlist" tab
    And I check institution award dates
    When I go to "Award process setup"
    Then I check award process setup information
    And I go to "History" tab
    And I click on the "New" button to create new history
    And I fill second institute data in "Institution Student Type" fields
    When I click on "save" button
    Then I go to "Cap & Waitlist" tab
    And I check institution award dates for second institution
    And I go to "Award process setup"
    When I check award process setup information for second institution
    Then I go to "History" tab and delete institution



