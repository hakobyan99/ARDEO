Feature: Login

  Scenario: Verify login functionality
    Given I go to login page
    And I fill "username" in username field
    And I fill "password" in password field
    When I click on login button
    Then Check I am logged in

  Scenario: Verify logout functionality
    Given I login with creds username & password
    And I click on username from header
    When I click on Log out button
    Then Check I am logged out
