Feature: API Testing with Playwright and Cucumber

  Scenario: Get user details
    Given I have the API endpoint "https://reqres.in/api/users?page=2"
    When I send a GET request to the endpoint
    Then the response status should be 200
    And the response should contain the user details
