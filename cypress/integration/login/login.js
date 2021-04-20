import {Given, When} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../Pages/LoginPage";
import {Logo, LoginButton, LogoutButton, UsernameHeader} from "../../Pages/LoginResultPage"
const pass = Cypress.env('password')
const userName = Cypress.env('username')

Given('I go to login page', function () {
    LoginPage.goToPage()
})

When('I fill "username" in username field', function () {
    LoginPage.fillUsernameField(userName)
})

When('I fill "password" in password field', function () {
    LoginPage.fillPassField(pass)
})

When("I click on login button", function () {
    LoginButton.expect().toBeVisible()
    LoginPage.clickOnLoginBtn()
})

When("Check I am logged in", function () {
    Logo.expect().toBeVisible()
})

Given('I login with creds username & password', function () {
    LoginPage.goToPage()
    LoginPage.fillUsernameField(userName)
    LoginPage.fillPassField(pass)
    LoginButton.expect().toBeVisible()
    LoginPage.clickOnLoginBtn()
    Logo.expect().toBeVisible()
})

When("I click on username from header", function () {
    UsernameHeader.expect().toBeVisible()
    LoginPage.clickUsername()
})

When("I click on Log out button", function () {
    LoginPage.clickLogOut()
})

Then("Check I am logged out", function () {
    LogoutButton.expect().toBeVisibleLoginTitle()
})
