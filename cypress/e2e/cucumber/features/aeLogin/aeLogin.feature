@ae @smoke
Feature: Automation Exercise login

  Background:
    Given I open the AE login page

  Scenario: AE user logs in with valid credentials
    When I login to AE as a valid user
    Then I should see that I am logged in to AE

  Scenario Outline: AE invalid credentials
    When I login to AE with email "<email>" and password "<password>"
    Then I should see an AE invalid credentials error

    Examples:
      | email               | password        |
      | UserTest123         | wrongPassword   |
      | wrong@example.com   | XFr@B2DRvK23@aN |
      | wrong@example.com   | wrongPassword   |