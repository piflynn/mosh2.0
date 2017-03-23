import { Mosh2.0Page } from './app.po';

describe('mosh2.0 App', () => {
  let page: Mosh2.0Page;

  beforeEach(() => {
    page = new Mosh2.0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
