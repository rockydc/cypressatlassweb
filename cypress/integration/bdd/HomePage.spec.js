const HomePage = require("../../helper/pages/Homepage");
const homepage = new HomePage();

const HomepageData = require("../../helper/datatest/HomepageData");
describe("BDD Atlas", () => {
	it("Visit BDD Atlas Web", () => {
		homepage.visit("http://bdd.atlasid.tech/");
	});

	it("Type a Quote", () => {
		homepage.type_quote(HomepageData.dataTest.quote);
	});
	it("Choose Color", () => {
		homepage.choose_color(HomepageData.dataTest.quoteColour);
	});
	it("submit a quote", () => {
		homepage.submitQuote(
			HomepageData.dataTest.quote,
			HomepageData.dataTest.quoteColour
		);
	});
	it("Clear Specific Quote", () => {
		homepage.clearQuote(HomepageData.dataTest.quote);
	});
});
