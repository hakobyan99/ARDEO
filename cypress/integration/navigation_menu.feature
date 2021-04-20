Feature: Navigation menu

  Background:
    Given I login with creds username & password

  Scenario: Check submenus
    Given I ensure navigation menu is visible
    Then I check the submenu elements are visible

  Scenario: Verify hamburger button functionality
    Given I click on hamburger menu button
    Then I check the submenus elements are invisible
