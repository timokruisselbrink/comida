import { ComidaPage } from './app.po';

describe('comida App', () => {
  let page: ComidaPage;

  beforeEach(() => {
    page = new ComidaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
