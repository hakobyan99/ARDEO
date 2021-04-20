import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../Pages/LoginPage";
import {LoginButton, Logo} from "../../Pages/LoginResultPage";
import {Institution} from "../../Pages/institutionLRAPHistoryResults";
import InstitutionLRAPHistory from "../../Pages/institutionLRAPHistory";

const userName = Cypress.env("username")
const password = Cypress.env("password")
const institutionApShortName = Cypress.env("institutionApShortName")
const institutionStudentTypeDescription = Cypress.env("institutionStudentTypeDescription")
const cohort = Cypress.env("cohort")
const secondCohort = Cypress.env("secondCohort")
const photo1 = 'photos.jpg'
const photo2 = 'Alma College.jpg'
const photo3 = 'https___cdn.cnn.com_cnnnext_dam_assets_190808205502-23-week-in-photos-0809-restricted.jpg'



Given("I login with creds username & password", () => {
    LoginPage.goToPage()
    LoginPage.fillUsernameField(userName)
    LoginPage.fillPassField(password)
    LoginButton.expect().toBeVisible()
    LoginPage.clickOnLoginBtn()
    Logo.expect().toBeVisible()
})

When ("I create new institution", () => {
    InstitutionLRAPHistory.clickOnNewButton()
    InstitutionLRAPHistory.fillSchoolNameField()
    InstitutionLRAPHistory.fillCityField()
    InstitutionLRAPHistory.fillStateField()
    InstitutionLRAPHistory.fillShortNameField()
    InstitutionLRAPHistory.selectStatus()
    InstitutionLRAPHistory.fillContractDateField()
    InstitutionLRAPHistory.fillIDField()
    InstitutionLRAPHistory.checkTestInstitutionCheckbox()
    InstitutionLRAPHistory.clickOnSaveButton()
})

Then("I check added institution modal is opened", () => {
    Institution.expect().institutionFormModalToBeVisible()
})

When('I click on the "New" button to create new history', () => {
    InstitutionLRAPHistory.clickOnHistoryCreationButton()
})

When('I fill "Institution Student Type" fields', () => {
    Institution.expect().modalToBeVisible()
    InstitutionLRAPHistory.fillApShortNameField(institutionApShortName)
    InstitutionLRAPHistory.fillStudentTypeDescriptionField(institutionStudentTypeDescription)
    InstitutionLRAPHistory.selectOptions(cohort)
    InstitutionLRAPHistory.fillIntroStudentsField()
    InstitutionLRAPHistory.fillUITField()
    InstitutionLRAPHistory.fillLITField()
    InstitutionLRAPHistory.fillFeeTable()
})

When('I go to "Cap & Waitlist" tab', () => {
    Institution.expect().capTabToBeVisible()
    InstitutionLRAPHistory.clickOnCapAndWaitlistTab()
})

When('I check institution award dates', () => {
    InstitutionLRAPHistory.selectCorrectCohort(cohort)
    Institution.expect().toHaveCorrectDates(institutionApShortName, institutionStudentTypeDescription)
})

When('I go to "Award process setup"', () => {
    InstitutionLRAPHistory.clickOnAwardProcessSetupTab()
})

Then('I check award process setup information', () => {
    InstitutionLRAPHistory.selectCorrectAwardCohort(cohort)
    Institution.expect().toHaveCorrectInformation(institutionApShortName, institutionStudentTypeDescription)
})

When('I go to "History" tab', () => {
    InstitutionLRAPHistory.clickOnHistoryTab()
})
Then ('I go to "History" tab and delete institution', () => {
    InstitutionLRAPHistory.clickOnHistoryTab()
    InstitutionLRAPHistory.clickOnInstitutionDeleteButton()
    Institution.expect().institutionDeleteSuccessMessagedToBeVisible()
})





When('I fill second institute data in "Institution Student Type" fields', () => {
    Institution.expect().modalToBeVisible()
    InstitutionLRAPHistory.fillApShortNameField(institutionApShortName)
    InstitutionLRAPHistory.fillStudentTypeDescriptionField(institutionStudentTypeDescription)
    InstitutionLRAPHistory.selectOptions(secondCohort)
    InstitutionLRAPHistory.fillIntroStudentsField()
    InstitutionLRAPHistory.fillUITField()
    InstitutionLRAPHistory.fillLITField()
    InstitutionLRAPHistory.fillFeeTable()
})

When('I click on "save" button', () => {
    Institution.expect().toBeEnabled()
    InstitutionLRAPHistory.clickOnSaveButton()
})

When('I check institution award dates for second institution', () => {
    InstitutionLRAPHistory.clickOnCapAndWaitlistTab()
    InstitutionLRAPHistory.selectCorrectCohort(secondCohort)
    Institution.expect().toHaveCorrectDates(institutionApShortName, institutionStudentTypeDescription)
})

When('I check award process setup information for second institution', () => {
    InstitutionLRAPHistory.selectCorrectAwardCohort(secondCohort)
    Institution.expect().toHaveCorrectInformation(institutionApShortName, institutionStudentTypeDescription)
})

Given('I create new LRAP history', () => {
    InstitutionLRAPHistory.clickOnHistoryCreationButton()
    Institution.expect().modalToBeVisible()
    InstitutionLRAPHistory.fillApShortNameField(institutionApShortName)
    InstitutionLRAPHistory.fillStudentTypeDescriptionField(institutionStudentTypeDescription)
    InstitutionLRAPHistory.selectOptions(cohort)
    InstitutionLRAPHistory.fillIntroStudentsField()
    InstitutionLRAPHistory.fillUITField()
    InstitutionLRAPHistory.fillLITField()
    InstitutionLRAPHistory.fillFeeTable()
    Institution.expect().toBeEnabled()
    InstitutionLRAPHistory.clickOnSaveButton()
})

When('I select "2019 - 2020" cohort', () => {
    InstitutionLRAPHistory.selectCorrectAwardCohort(cohort)
})

When('I click on "Edit" button', () => {
    Institution.expect().toHaveEditButton()
    InstitutionLRAPHistory.clickOnEditButton()
})

When("I fill edit modal's fields", () => {
    Institution.expect().editModalToBeVisible()
    InstitutionLRAPHistory.fillLogoField()
    InstitutionLRAPHistory.fillClientWebsiteField()
    InstitutionLRAPHistory.fillAwardLandingPageField()
    InstitutionLRAPHistory.fillLongLrapNameField()
    InstitutionLRAPHistory.fillShortLrapNameField()
    InstitutionLRAPHistory.fillClientAdmissionsPhoneNumberField()
    InstitutionLRAPHistory.fillClientEmailField()
    InstitutionLRAPHistory.fillClientFinAidPhoneNumberField()
    InstitutionLRAPHistory.fillClientFinAidEmailField()
    InstitutionLRAPHistory.fillVideo1Field()
    InstitutionLRAPHistory.fillVideo2Field()
    InstitutionLRAPHistory.fillBackgroundColorField()
    InstitutionLRAPHistory.selectOptionP()
    InstitutionLRAPHistory.uploadPhotos(photo1, photo2, photo3)
    Institution.expect().toBeEnabled()
})

When('I click on "Save" button', () => {
    InstitutionLRAPHistory.clickOnSaveButton()

})

When('I click on "Close" button', () => {
    Institution.expect().editModalToBeVisible()
    Institution.expect().buttonToBeVisible()
    InstitutionLRAPHistory.clickOnCancelButton()
})

When('I check the photos is added', () => {
    Institution.expect().photoToBeAdded()
})
