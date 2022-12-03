import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import insuranceFormPage from '../pageobjects/insuranceFormPage'
const insurancePage = new insuranceFormPage

Given(/^I access the Tricentis site$/, (  ) =>{
    insurancePage.accessSite();
} );

When(/^I fill the Insurance form correctly$/, (  ) =>{
    insurancePage.veichleTab();
    insurancePage.insuranceTab();
    insurancePage.productTab();
    insurancePage.selectPriceTab();
    insurancePage.sendQuoteTab();
} );

Then(/^I should be able to submit the form with success$/, (  ) =>{
    insurancePage.confirmSuccessMessage();
} );
