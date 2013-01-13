Feature: Resume management

  Scenario: I want to view the resume
    When I visit "/resume"
    Then I should see "Kelly Wolf Stannard"
    And I should see "317.670.9869"
    And I should see "kelly@stannard.org"
    And I should see "github.com/kwstannard"
