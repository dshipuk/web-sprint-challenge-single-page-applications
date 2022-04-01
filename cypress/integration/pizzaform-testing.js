describe("Pizza Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })


    // Helpers
    const nameInput = () => cy.get("input[name=name]");
    const pepperoniCheckbox = () => cy.get("input[name=Pepperoni]")
    const chickenCheckbox = () => cy.get("input[name=Chicken]")
    const tomatoesCheckbox = () => cy.get("input[name=Tomatoes]")
    const onionsCheckbox = () => cy.get("input[name=Onions]")
    const selectSize = () => cy.get("select[name=size]")
    const specialInput = () => cy.get("input[name=special]")
    const submitOrder = () => cy.get("input[id=order-button]")

    it("Sanity Check", () => {
        expect(1+1).to.equal(2)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
    })

    it("Checking Helpers Exist", () => {
        nameInput().should("exist")
        pepperoniCheckbox().should("exist")
        chickenCheckbox().should("exist")
        tomatoesCheckbox().should("exist")
        onionsCheckbox().should("exist")
        selectSize().should("exist")
        specialInput().should("exist")
        submitOrder().should("exist")
    })

    it("Checking Inputs are Typeable", () => {
        nameInput()
            .should("have.value", "")
            .type("Test Name")
            .should("have.value", "Test Name")
            .clear()
            .should("be.empty")
        specialInput()
            .should("have.value", "")
            .type("Test Special")
            .should("have.value", "Test Special")
            .clear()
            .should("be.empty")
    })

    it("Testing Checkboxes are Checkable", () => {
        pepperoniCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")
        chickenCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")
        tomatoesCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")
        onionsCheckbox()
            .should("not.be.checked")
            .check()
            .should("be.checked")
            .uncheck()
            .should("not.be.checked")
    })

    it("Test Size DropDown", () => {
        selectSize()
            .should("have.value", "")
            .select("medium")
            .should("have.value", "medium")
            .select([])
            .should("have.value", "")
    })

    it("Testing Submit", () => {
        nameInput()
            .type("TestName")
            
        chickenCheckbox()
            .check()

        tomatoesCheckbox()
            .check()

        specialInput()
            .type("Extra Cheese")

        selectSize()
            .select("large")

        submitOrder()
            .click()

        nameInput()
            .should("be.empty")

        chickenCheckbox()
            .should("not.be.checked")

        tomatoesCheckbox()
            .should("not.be.checked")

        specialInput()
            .should("be.empty")

        selectSize()
            .should("have.value", "")
    })



})