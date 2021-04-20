export const Menu = class Menu {
    static expect (){
        return {
            toBeVisible: () => {
                cy.get('[class*="page-sidebar "]').should('be.visible')
            }
        }
    }
}

export const Submenus = class Submenus {
    static  expect (){
        return{
            toBeVisible: (name) => {
                cy.get("[class='title']").should('be.visible')
                for (let index = 0; index < name.length; index++) {
                    cy.get("[class='title']:visible").eq(index).should('have.text', name[index])
                }
            },
            toBeTextInVisible: (name) => {
                cy.get('h3.logo-default').should('not.be.visible')
                cy.get('ul[class*="page"] > li > a span[class="title"] ').each((elem)=>{
                    cy.wrap(elem).should('not.be.visible')
                })

            }
        }
    }
}
