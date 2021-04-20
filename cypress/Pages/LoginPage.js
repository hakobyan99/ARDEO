class LoginPage {

    static goToPage() {
        cy.visit('/')
    }

    static loginButton() {
        return cy.get('[class*="uppercase"]')
    }

    static clickOnLoginBtn() {
        this.loginButton().click()
    }

    static fillUsernameField(userName) {
        cy.get('[name*="user"]').type(userName)
    }

    static fillPassField(Pass) {
        cy.get('[name="password"]').type(Pass)
    }

    static clickUsername() {
        cy.get('[class="dropdown dropdown-user dropdown-dark"]').click()
    }

    static clickLogOut() {
        cy.get('[class="dropdown-menu dropdown-menu-default"] a').contains(" Logout").click()
    }
}

export default LoginPage
