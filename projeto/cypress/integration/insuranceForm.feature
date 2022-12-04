Feature: Automobile Insurance Form
    Scenario: Submit form successfuly
        Given I want to submit the Insurance Form successfuly
        When I fill the Vehicle Tab
        And I fill the Insurance Tab
        And I fill the Product tab
        And I select the price on Select Price tab
        And I fill the Quote Tab
        Then I should be able to submit the form with success
        


