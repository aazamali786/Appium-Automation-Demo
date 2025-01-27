Feature: Create a new workout plan

  Scenario: User creates a new workout plan
    When User launch and login to android application
    When The user is on the workout tab
    When The user clicks on the add icon
    When The user fills in the workout plan name and description
    When The user saves the workout plan
    Then The new workout plan should be visible in the list
