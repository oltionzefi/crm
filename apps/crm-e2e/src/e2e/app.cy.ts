import { getMenuTabs } from '../support/app.po';

describe('crm', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getMenuTabs().contains('a');
  });
});
