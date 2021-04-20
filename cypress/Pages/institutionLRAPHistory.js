class InstitutionLRAPHistory {

    static instituteInformationModal() {
        return cy.get('[class="modal-dialog modal-full-width"]')
    }

    static institutionStudentTypeModal () {
        return cy.get('[style="font-size: 16px;"]')
    }

    static institutionFormModal () {
        return cy.get('[id="InstitutionFormModal"]')
    }

    static clickOnNewButton () {
        cy.get('[class="portlet-title"] [class*="btn btn-default "]').click()
    }

    static fillSchoolNameField () {
        cy.get('[name="institutionName"]:visible').type('GdrSchool')
    }

    static fillCityField (){
        cy.get('[name="city"]:visible').type('Ohio city')
    }

    static fillStateField () {
        cy.get('[name="statProvince"]:visible').type('Ohio')
    }

    static fillShortNameField () {
        cy.get('[name="shortName"]:visible').type('GDR')
    }

    static selectStatus () {
        cy.get('[name="status"]:visible').select('Active')
    }

    static fillContractDateField () {
        cy.get('[name="contractDate"]:visible').type('20.04.2019')
    }

    static fillIDField () {
        cy.get('[name="ipedsId"]:visible').type('1')
    }

    static checkTestInstitutionCheckbox () {
        cy.get('[name="testFlag"]:visible').click()
    }

    static searchedResult() {
        return cy.get('[class="tt-menu tt-open"]', {timeout: 10000})
    }

    static capCohortOptions() {
        return cy.get('[class="col-md-12"] [class="form-control"]')
    }

    static awardCohortOptions() {
        return cy.get('[class="col-md-12"] [class*="form-control ng"]')
    }

    static clickOnHistoryCreationButton() {
        cy.get('[class*="portlet-t"] [data-toggle="modal"]').eq(2).click()
    }

    static fillApShortNameField(institutionName) {
        cy.get('[id="apShortName"]', {timeout: 3000}).type(institutionName)
    }

    static fillStudentTypeDescriptionField(studentTypeDescription) {
        cy.get('[name="studentTypeDescription"]').type(studentTypeDescription)
    }

    static institutionStudentTypeModal() {
        return cy.get('[style="font-size: 16px;"]', {timeout: 3000})
    }

    static selectOptions(cohort) {
        let c = 0;
        cy.get('[class="row"] select[class*="form-control ng"]:visible')
            .each((select) => {
                let text = select.text()
                let array = []
                if (c <= 3) {
                    array = text.split('\n' + '                                        ')
                        .join('')
                        .split('\n' + '                                    ')
                        .map(String)
                } else {
                    array = text.split('\n' + '                                            ')
                        .join('')
                        .split('\n' + '                                        ')
                        .map(String)
                }
                let string = []
                for (let index = 0; index < array.length - 2; index++) {
                    string[index] = array[1 + index]
                }
                let random = Math.floor(Math.random() * string.length)
                if (c === 0) {
                    cy.wrap(select).select(cohort)
                } else {
                    cy.wrap(select).select(string[random])
                }
                c++
            })
    }

    static randomName() {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (let index = 0; index < 10; index++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    static fillIntroStudentsField() {
        cy.get('[id="introStudents"]').type('' + this.randomNumber())
    }

    static randomNumber() {
        let randomNumber = 0
        return randomNumber + Math.floor(Math.random() * 100)
    }

    static fillUITField() {
        const numberOfUIT = 100 + this.randomNumber()
        cy.get('[id="upperIncomeLimit"]').type('' + numberOfUIT)
    }

    static fillLITField() {
        const numberOfLIT = this.randomNumber()
        cy.get('[id="lowerIncomeLimit"]').type('' + numberOfLIT)
    }

    static fillFeeTable() {
        cy.get('[class="fee-table"] [ng-reflect-name*="annualFee"]').each((feeField) => {
            cy.wrap(feeField).type('' + this.randomNumber())
        })
    }

    static saveButton() {
        return cy.get('[class="modal-footer"] [class="btn blue"]:visible')
    }

    static clickOnSaveButton() {
        this.saveButton().click()

    }

    static capAndWaitlistTab() {
        return cy.get('[data-toggle="tab"]').eq(1).scrollIntoView()
    }

    static clickOnCapAndWaitlistTab() {
        cy.get('[data-toggle="tab"]').eq(1).click()
    }

    static clickOnHistoryTab (){
        cy.get('[data-toggle="tab"]').eq(0).scrollIntoView().click()
    }

    static clickOnInstitutionDeleteButton () {
        cy.get('[class="portlet-title"] [data-toggle="modal"]').eq(1).click()
        cy.get('[class="btn red"]:visible').click()
    }

    static institutionDeleteSuccessMessage (){
        return cy.get('[class="toast-message"]')
    }

    static capTabCohortSelector() {
        return cy.get('[class="col-md-12"]  [class="form-control"]')
    }

    static selectCorrectCohort(cohort) {
        this.capTabCohortSelector().select(cohort)
    }

    static institutionAwardDatesCaption() {
        return cy.get('[id="tab_award"] [class="caption"]').eq(0)
    }

    static clickOnAwardProcessSetupTab() {
        cy.get('[data-toggle="tab"]').eq(4).scrollIntoView().click()
    }

    static selectCorrectAwardCohort(cohort) {
        cy.get('[id*="tab_award"] [class="col-md-12"] [class*="form-control "]').select(cohort)
    }

    static awardProcessSetupInformationCaption() {
        return cy.get('[id="tab_award_process_setup2"] [class="caption"]').scrollIntoView()
    }

    static awardProcessSetupButtons() {
        return cy.get('[id="tab_award_process_setup2"] [data-toggle="modal"]')
    }

    static clickOnActivationButton() {
        this.awardProcessSetupButtons().eq(0).click()
    }

    static clickOnEditButton() {
        this.awardProcessSetupButtons().eq(1).click()
    }

    static editModal() {
        return cy.get('[id="AwardProcessSetupInfoModalv2"]')
    }

    static fillLogoField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="logo"]').type('https://gallery.mailchimp.com/22b9361c5818c36271b30d1dd/images/fb54691a-416f-481f-a029-0d6b5f577a10.png')
    }

    static fillClientWebsiteField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="clientWebSite1"]:visible').type('www.mylrap.org')
    }

    static fillAwardLandingPageField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="awardLandingPage1"]').type('mylrap.org/alma')
    }

    static fillLongLrapNameField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="longLrapName1"]').type('The Loan Repayment Assistance Program (LRAP)')
    }

    static fillShortLrapNameField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="sortLrapName1"]').type('LRAP')
    }

    static randomPhoneNumber() {
        let text = "";
        let possible = "0123456789";
        for (let index = 0; index < 10; index++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    static fillClientAdmissionsPhoneNumberField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="clientAdmissionPhoneNumber1"]').type(this.randomPhoneNumber())
    }

    static fillClientEmailField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="clientEmail1"]').type(this.randomName() + '@Gdr.edu')
    }

    static fillClientFinAidPhoneNumberField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="clientFinAidPoneNumber1"]').type(this.randomPhoneNumber())
    }

    static fillClientFinAidEmailField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="clientFinAidEmail1"]').type(this.randomName() + '@Gdr.edu')
    }

    static fillVideo1Field() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="video_1"]').type('https://fast.wistia.net/embed/iframe/0xhjntlay4?videoFoam=true')
    }

    static fillVideo2Field() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="video_2"]').type('https://www.youtube.com/embed/xgAm2pxbORk?rel=0')
    }

    static randomColor() {
        return (Math.random() * 0xfffff * 1000000).toString(16)
    }

    static fillBackgroundColorField() {
        cy.get('[id="AwardProcessSetupInfoModalv2"] [name="backgroundColor"]').type(this.randomColor())
    }

    static uploadPhotos(photo1, photo2, photo3) {
        cy.get('[name="document1"]').attachFile(photo1)
        cy.get('[name="document2"]').attachFile(photo2)
        cy.get('[name="document3"]').attachFile(photo3)
    }

    static checkAddedPhoto () {
        return cy.get('img[class="img-thumbnail"]')
    }

    static cancelButton (){
        return cy.get('[method="post"] [class="btn dark btn-outline"]').eq(0)
    }

    static clickOnCancelButton () {
        this.cancelButton().click()
    }

    static selectOptionP () {
        cy.get('[ng-reflect-name="offerProviderFlag"]').select('P')
    }
}

export default InstitutionLRAPHistory
