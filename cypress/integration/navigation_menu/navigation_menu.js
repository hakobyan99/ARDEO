import {Given, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../Pages/LoginPage";
import {Logo, LoginButton} from "../../Pages/LoginResultPage";
import {Menu, Submenus} from "../../Pages/NavMenuResultePage";
import NavMenuPage from "../../Pages/NavMenuPage";

const name = ['Institutions', 'Students', 'RAP Accounts', 'Verified RAP Accounts', 'Terms and Conditions',
    'User Activity', 'Data Export', 'CFP Admin', 'Fee And Enrollment Type ', 'Administration']
const pass = Cypress.env('password')
const userName = Cypress.env('username')


Given("I login with creds username & password", function () {
    LoginPage.goToPage()
    LoginPage.fillUsernameField(userName)
    LoginPage.fillPassField(pass)
    LoginButton.expect().toBeVisible()
    LoginPage.clickOnLoginBtn()
    Logo.expect().toBeVisible()
})

Given('I ensure navigation menu is visible', function () {
    Menu.expect().toBeVisible()
})

Given('I click on hamburger menu button', function () {
    NavMenuPage.hamburgerMenu()
})

Then('I check the submenu elements are visible', function () {
    Submenus.expect().toBeVisible(name)
})

Then('I check the submenus elements are invisible', function () {
    Submenus.expect().toBeTextInVisible(name)
})
