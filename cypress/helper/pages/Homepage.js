const locator = require("../locator/HomePageLocator");
// hash map

let css_colour = {
	Blue: "background-color: blue;",
	Yellow: "background-color: yellow;",
	Cyan: "background-color: cyan;",
	White: "background-color: white;",
};
class HomePage {
	async visit(path) {
		cy.visit(path);
		return cy.url().should("eq", "http://bdd.atlasid.tech/");
	}

	async type_quote(quote) {
		return cy.get(locator.dataTestid.ta_quote).type(quote);
	}

	async choose_color(colour) {
		// color available

		return cy.get(locator.dataTestid.sel_colour).select(colour);
	}

	async submitQuote(quote, colour) {
		// validasi warna
		cy.get(locator.dataTestid.btnQuote).click();
		cy
			.get(locator.dataTestid.cont_colour)
			.should("have.attr", "style", css_colour[colour]);
		return cy.contains(quote).should("exist");
	}
	async clearQuote(quote) {
		return cy.contains(quote).click().should("not.exist");
	}
}

module.exports = HomePage;