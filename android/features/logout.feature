Feature: Logout Functionality
  
  Scenario: User logs out successfully
    When User launch and login to android application
    When I navigate to the settings and log out
    Then I should see the "Register Now" button on the login screen
