import { TransactionFormComponent } from './transaction-form.component';

describe('TransactionForm', () => {
  it('Should be exist', () => {
    cy.mount(TransactionFormComponent);
    cy.should('exist');
  });

  it('Should have an amount input', () => {
    cy.mount(TransactionFormComponent);
    cy.get('input.amount-transaction').should('exist');
  });
});
