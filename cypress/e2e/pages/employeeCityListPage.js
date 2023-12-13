class employeeCityListPage{
    elements = {
        list: () => cy.get('div[id=listBoxSelected]'),
        viewSelectedDataButton: () => cy.get('button[id="btn"]')
    }

    clickViewSelectedDataButton(){
        this.elements.viewSelectedDataButton().click();
    }

    validateListEntries(params){
        this.elements.list().each(($el) => {
            const text = $el.find('div[role=option][id*=listitem]').text()
            
            for (let i=0; i<params.length; i++) {
                if(!text.includes(params[i]))
                {
                    throw new Error("Entry not found on the list");
                }
            }
        })
    }

    validateListIsVisible(expectedStatus){
        if (!expectedStatus==true){
            this.elements.list().should('not.be.visible')
        }
        else {
            this.elements.list().should('be.visible')
        }
    }
}

module.exports = new employeeCityListPage()