@test
Feature: Login
  User authentication scenarios

  Background:
    Given I open the login page

  @practice @smoke
  Scenario: 1) User is logged in
    When I login with username "practice" and password "SuperSecretPassword!"
    Then I should see that I am logged in

  Scenario: 2) User is trying to logged in with incorrect credentials
    When I login with username "wrongUser" and password "wrongPassword!"
    Then I should see an invalid credentials error

  Scenario Outline: Invalid credentials
    When I login with username "<username>" and password "<password>"
    Then I should see an invalid credentials error

    Examples:
      | username  | password              |
      | practice  | wrongPassword!        |
      | wrongUser | SuperSecretPassword!  |
      | wrongUser | wrongPassword!        |

  Scenario: 3) Unauthenticated user is redirected to login page
    When I open the secure page directly
    Then I should be on the login page

  @practice @smoke
  Scenario: 4) User logs out
    Given I am logged in as "practice" with password "SuperSecretPassword!"
    When I log out
    Then I should be logged out