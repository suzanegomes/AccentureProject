import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import insuranceFormPage from '../pageobjects/insuranceFormPage'
const insurancePage = new insuranceFormPage

Given(/^I want to submit the Insurance Form successfuly$/, (  ) =>{
} );


When(/^I fill the Vehicle Tab$/, (  ) =>{
    insurancePage.veichleTab();
} );


When(/^I fill the Insurance Tab$/, (  ) =>{
    insurancePage.insuranceTab();
} );


When(/^I fill the Product tab$/, (  ) =>{
    insurancePage.productTab();
} );


When(/^I select the price on Select Price tab$/, (  ) =>{
    insurancePage.selectPriceTab();
} );


When(/^I fill the Quote Tab$/, (  ) =>{
    insurancePage.sendQuoteTab();
} );


Then(/^I should be able to submit the form with success$/, (  ) =>{
    insurancePage.confirmSuccessMessage();
} );


