@test
Feature: Login
  User authentication scenarios

  Background:
    Given I open the login page

  @practice @smoke
  Scenario: User logs in with valid credentials
    When I login as a valid user
    Then I should see that I am logged in

  @practice
  Scenario Outline: User tries to log in with invalid credentials
    When I login with username "<username>" and password "<password>"
    Then I should see an invalid credentials error

    Examples:
      | username  | password              |
      | practice  | wrongPassword!        |
      | wrongUser | SuperSecretPassword!  |
      | wrongUser | wrongPassword!        |

  @practice
  Scenario: Unauthenticated user is redirected to login page
    When I open the secure page directly
    Then I should be on the login page

  @practice @smoke
  Scenario: User logs out
    Given I am logged in as a valid user
    When I log out
    Then I should be logged out
