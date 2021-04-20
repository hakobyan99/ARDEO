import LoginPage from "./LoginPage";

export const LoginButton = class LoginButton {
    static expect() {
        return {
            toBeVisible: () => {
                LoginPage.loginButton().should('be.visible')
            }
        }
    }
}

export const UsernameHeader = class UsernameHeader {
    static expect() {
        return {
            toBeVisible: () => {
                cy.get('[class="dropdown dropdown-user dropdown-dark"]').should('be.visible')
            }
        }
    }
}

export const LogoutButton = class LogoutButton {
    static expect() {
        return {
            toBeVisibleLoginTitle: () => {
                cy.get('[class="form-title"]').should('have.text', 'Log in').and('be.visible')
            }
        }
    }
}

export const Logo = class Logo {
    static expect() {
        return {
            toBeVisible: () => {
                cy.get('h3[class="logo-default"]').should('have.text', ' LRAP OSR ').and('be.visible')
            }
        }
    }
}
