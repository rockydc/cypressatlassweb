/*global Given,when,then*/


const Homepage = require("../../../helper/pages/Homepage");
let homepage = new Homepage();

Given(/^I open BDD Atlas Web$/, () => {
    homepage.visit("http://bdd.atlasid.tech/");
});

When(/^I type a quote: (.+)$/, (quote) => {
    homepage.type_quote(quote);
});
When(/^I choose the (\w+) colour$/, (colour) => {
    homepage.choose_color(colour);
});

Then(`I verify quote submitted {string} and {string}`, (colour, quote) => {
    homepage.submitQuote(quote, colour);
});


Then(/^I verify quote has been deleted: (.+)$/, (quote) => {
    homepage.clearQuote(quote)
})