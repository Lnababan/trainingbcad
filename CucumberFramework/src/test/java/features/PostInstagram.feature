#created by Lusi Indah
Feature: User try post photo to Instagram

  @instagram
  Scenario: User try post photo to Instagram
    Given user in login page instagram
    When user input username "trialbcad"
    And user input password "@29Maret2023"
    And user loggedin to instagram
    And user click add post
    And user choose photo from directory
    And user edit photo in instagram
    And user type caption "Training BCA Digital SQA 2023 - Lusi - Indah"
    Then user click button share


