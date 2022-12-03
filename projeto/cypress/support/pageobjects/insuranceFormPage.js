/// <reference types = "Cypress"/>

import insuranceFormElements from '../elements/insuranceFormElements'
const insuranceElements = new insuranceFormElements
const url = "http://sampleapp.tricentis.com/101/app.php"

class insuranceFormPage {
    // access site
     accessSite(){
        cy.visit(url)
     }
     veichleTab(){
        cy.get(insuranceElements.MakeField).select("Ford")
        cy.get(insuranceElements.ModelField).select("Scooter")
        cy.get(insuranceElements.CylinderField).click().type(4)
        cy.get(insuranceElements.EngineField).type(100)
        cy.get(insuranceElements.DateManufactureField).type("10/19/2022")
        cy.get(insuranceElements.NumberSeatsField).select("2")
        cy.get(insuranceElements.NumberSeatsMotor).select("2")
        cy.get(':nth-child(7) > .group > :nth-child(1) > .ideal-radio').click()
        cy.get(insuranceElements.FuelTypeField).select("Gas")
        cy.get(insuranceElements.PayloadField).type("100")
        cy.get(insuranceElements.TotalWeight).type(100)
        cy.get(insuranceElements.ListPrice).type(20000)
        cy.get(insuranceElements.LicensePlateField).type("GUY2564")
        cy.get(insuranceElements.AnnualMileageField).type(200)
        cy.get(insuranceElements.NextButtonVehicle).click()
     }
     insuranceTab(){
        cy.get(insuranceElements.FirstNameField).click().type("Claudia")
        cy.get(insuranceElements.LastNameField).click().type("Peixoto")
        cy.get(insuranceElements.DateOfBirthField).click().type("01/25/1995")
        cy.get(insuranceElements.GenderSection).click()
        cy.get(insuranceElements.StreetAdress).type("John Stuart st")
        cy.get(insuranceElements.ZipCodeField).type(12564782)
        cy.get(insuranceElements.CountrySection).select("Brazil")
        cy.get(insuranceElements.CityField).type("Montana")
        cy.get(insuranceElements.OccupationField).select("Employee")
        cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(2)').click()
        cy.get(insuranceElements.WebsiteField).type("claudiapeixoto.com")
        cy.get(insuranceElements.NextButtonInsurance).click()
     }
     productTab(){
        cy.get(insuranceElements.StartDateField).type("01/12/2023")
        cy.get(insuranceElements.InsuranceSumField).select("7.000.000,00")
        cy.get(insuranceElements.MeritRatingField).select("Bonus 4")
        cy.get(insuranceElements.DamageInsuranceField).select("Full Coverage")
        cy.get('section[style="display: block;"] > .idealforms-field-checkbox > .group > :nth-child(2)').click()
        cy.get(insuranceElements.CourtesyCarField).select("Yes")
        cy.get(insuranceElements.NextButtonProduct).click()
     }
     selectPriceTab(){
        cy.get(insuranceElements.PriceOption).click()
        cy.get(insuranceElements.NextButtonPriceOption).click()
     }
     sendQuoteTab(){
        cy.get(insuranceElements.EmailField).click().type("claudiap@gmail.com")
        cy.get(insuranceElements.PhoneField).click().type("115896447")
        cy.get(insuranceElements.UsernameField).click().type("claupeixoto")
        cy.get(insuranceElements.PasswordField).click().type("55968clauP.")
        cy.get(insuranceElements.ConfirmPasswordField).click().type("55968clauP.")
        cy.get('#sendemail').click()
        cy.wait(11000)
    }
    
   confirmSuccessMessage(){
           cy.get(insuranceElements.SuccessMessage).contains("Sending e-mail success!").should('be.visible') 
    } 
}
export default insuranceFormPage

