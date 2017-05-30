import { ParisPage } from './app.po';

describe('paris App', () => {
  let page: ParisPage;

  beforeEach(() => {
    page = new ParisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
