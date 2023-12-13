class employeeTablePage{
    elements = {
        tableItems: () => cy.get('tr[id*="treeGrid"]'),
        viewSelectedDataButton: () => cy.get('button[id="btn"]')
    }

    selectRowByNameSurname(name, surname){
        this.elements.tableItems().each(($el, index, $list) => {
            const rowName = $el.find('td[role=gridcell]:has(span[class*=jqx-tree-grid-title])').text()
            const rowSurname = $el.find('td[style="max-width:350px; width:350px;border-right-width: 0px;"]').text()

            if(rowName.includes(name) && rowSurname.includes(surname))
            {
                cy.wrap($el).find('span[class*="jqx-tree-grid-checkbox"]').click()
            }
        })
    }

    expandRowByNameSurname(name, surname){
        this.elements.tableItems().each(($el, index, $list) => {
            const rowName = $el.find('td[role=gridcell]:has(span[class*=jqx-tree-grid-title])').text()
            const rowSurname = $el.find('td[style="max-width:350px; width:350px;border-right-width: 0px;"]').text()

            if(rowName.includes(name) && rowSurname.includes(surname))
            {
                try {
                    cy.wrap($el).find('span[class*="jqx-tree-grid-collapse-button"]').click()
                } catch (error) {
                    console.error("The row selected can't be expanded");
                }
            }
        })
    }
};

module.exports = new employeeTablePage();