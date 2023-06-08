describe("Form Kontrolü", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("Girilen metin istenilen adı içermelidir", () => {
    const expectedName = "derya";
    const nameInput = cy.get("[data-cy=name-input]");
    nameInput.type("derya");
    nameInput.should("have.value", expectedName);
  });

  it("Girilen email istenilen adresi içermelidir", () => {
    const expectedEmail = "deryabalin@gmail.com"
    const emailInput = cy.get("[data-cy=email-input]");
    emailInput.type("deryabalin@gmail.com");
    emailInput.should("have.value", expectedEmail);
  });

  it("Girilen şifre doğru mu?", () => {
    const expectedPassword = "deryabbb"
    const passwordInput = cy.get("[data-cy=password-input]");
    passwordInput.type("deryabbb");
    passwordInput.should("have.value", expectedPassword);
  });

  it("Checkbox işaretlenmeli.", () => {
    cy.get("[data-cy=terms-checkbox]").check().should("be.checked");
  });

  it("Form verileri gönderilebilmelidir", () => {
    cy.get("[data-cy=name-input]").type("derya");
    cy.get("[data-cy=surname-input]").type("balın");
    cy.get("[data-cy=email-input]").type("deryabalin@gmail.com");
    cy.get("[data-cy=password-input]").type("deryabbb");
    cy.get("[data-cy=terms-checkbox]").check()
    cy.get("[data-cy=submit-button]").should("not.be.disabled").click();
    cy.get("[data-cy=teamList]").should("be.visible")
  });

  it("Form verileri gönderilemez", () => {
    cy.get("[data-cy=name-input]").type("derya");
    cy.get("[data-cy=email-input]").type("deryabalin@gmail.com");
    cy.get("[data-cy=password-input]").type("deryabbb");
    cy.get("[data-cy=terms-checkbox]").check()
    cy.get("[data-cy=submit-button]").should("be.disabled");
  });

});



