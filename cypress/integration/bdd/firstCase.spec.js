describe("BDD Atlas", () => {
	it("Visit BDD Atlas Web", () => {
		cy.visit("http://bdd.atlasid.tech/");
		cy.url().should("eq", "http://bdd.atlasid.tech/");
		cy.url().then((url) => {
			expect(url).to.be.equal("http://bdd.atlasid.tech/");
		});
	});

	it("Type a Quote", () => {
		cy.get("#inputQuote").type("Ayumu Tenanan Ora Editan");
	});
	it("submit a quote", () => {
		cy.get("#buttonAddquote").click();
		cy.contains("Ayumu").should("exist");
	});
	it("Clear Specific Quote", () => {
		cy.wait(200);
		cy.contains("ayumu Tenanan").click().should("not.exist");
		cy.contains("ayumu tenana").then(($elm) => {
			cy.get($elm).click();
			cy.get($elm).should("not.exist");
		});
	});
});
