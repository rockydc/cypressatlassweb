Feature: BDD Atlas Homepage Colour Quote

              I want to be able to submit quote in various Colour
        @TC001 @BlueColour
        Scenario: I want to be able to submit a Blue Quote
            Given I open BDD Atlas Web
             When I type a quote: Ayumu tenanan ora editan
              And I choose the Blue colour
             Then I verify quote submitted "Blue" and "Ayumu tenanan ora editan"
             Then I verify quote has been deleted: Ayumu

        @TC002 @AllColour
        Scenario Outline: Scenario Outline name: I want to be able to submit a <colour> Quote
            Given I open BDD Atlas Web
             When I type a quote: Ayumu tenanan ora editan
              And I choose the <colour> colour
             Then I verify quote submitted "<colour>" and "Ayumu tenanan ora editan"
             Then I verify quote has been deleted: Ayumu
        Examples:
             | colour |
             | White  |
             | Yellow |
             | Cyan   |

            #  tc 002 bakal looping 3x sesuai data test 

