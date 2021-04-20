import InstitutionLRAPHistory from "./institutionLRAPHistory";

export const Institution = class InstitutionName {

    static expect() {
        return {
            modalToBeVisible: () => {
                InstitutionLRAPHistory.institutionStudentTypeModal()
                    .should('be.visible')
                    .and('contain.text', 'Institution Student Type')
            },
            institutionFormModalToBeVisible: () =>{
                InstitutionLRAPHistory.institutionFormModal()
                    .should('be.visible')
        },
            institutionDeleteSuccessMessagedToBeVisible: () => {
              InstitutionLRAPHistory.institutionDeleteSuccessMessage()
                  .should('be.visible')
                  .and('contain.text', 'Record deleted successfully')
            },

            toBeEnabled: () => {
                InstitutionLRAPHistory.saveButton()
                    .should('be.enabled')
            },

            toHaveCorrectDates: (institutionSortName, studentType) => {
                InstitutionLRAPHistory.institutionAwardDatesCaption()
                    .should('contain.text', institutionSortName + ' - ' + studentType)
            },

            toHaveCorrectInformation: (institutionSortName, studentType) => {
                InstitutionLRAPHistory.awardProcessSetupInformationCaption()
                    .should('contain.text', institutionSortName + ' - ' + studentType)
            },

            toHaveEditButton: () => {
                InstitutionLRAPHistory.awardProcessSetupButtons()
                    .eq(1)
                    .should('contain.text', 'Edit')
            },

            editModalToBeVisible: () => {
                InstitutionLRAPHistory.editModal()
                    .should('be.visible')
            },

            photoToBeAdded: () => {
                cy.get('[class="toast toast-success"]')
                    .should('have.length', 6)
            },

            buttonToBeVisible: () => {
                InstitutionLRAPHistory.cancelButton()
                    .should('be.visible')
                    .and('contain.text', 'Cancel')
            },

            capTabToBeVisible: () => {
                InstitutionLRAPHistory.capAndWaitlistTab()
                    .should('be.visible')
            }
        }
    }
}


