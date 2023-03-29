#created by Lusi Indah
Feature: User try upload and download to toolsQA site

  @toolsqa
  Scenario: User try upload file
    Given user open page toolsqa
    When user upload file
    And user download file

