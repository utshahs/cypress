/// <reference types="Cypress" />

const PURPOSE = "Tourism";
const FROM_COUNTRY = "India";
const URL = "https://visa.guide";
const TO_COUNTRY = "Dubai (United Arab Emirates)";

context("Visa", () => {
  it("cy.go() - Select visa options", () => {
    // visit the page
    cy.visit(URL);

    // all 3 input has search class and all of them maintain the order so, fetching them as array and selecting each using index

    // click input form of from country, we get country list and select india from the list
    cy.get("div > input.search")
      .eq(0)
      .click();
    cy.get("div.menu.transition.visible")
      .contains(FROM_COUNTRY)
      .click();

    // Click To form of country and select Dubai
    cy.get("div > input.search")
      .eq(1)
      .click();
    cy.get("div.menu.transition.visible")
      .contains(TO_COUNTRY)
      .click();

    // Finally select the purpose
    cy.get("div > input.search")
      .eq(2)
      .click();
    cy.get("div.menu.transition.visible")
      .contains(PURPOSE)
      .click();

    // When all the parameters are selected, click Get Started button
    cy.get("#btn-login").click();
  });

  it("cy.go() - count length of visa results", () => {
    // Count the number of visa in result page

    const numberOfVisa = cy.get("ul.dragscroll").children();
    numberOfVisa.should("have.length.greaterThan", 0);
    cy.log("Total number of visa: ", numberOfVisa.its("length"));
  });
});
