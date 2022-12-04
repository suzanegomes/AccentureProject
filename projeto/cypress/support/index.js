const url = "http://sampleapp.tricentis.com/101/app.php"
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

beforeEach(() => {
  cy.visit(url)
})
Cypress.on('uncaught:exception', (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});
