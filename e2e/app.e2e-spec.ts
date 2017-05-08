import { Form0418Page } from './app.po';

describe('form0418 App', () => {
  let page: Form0418Page;

  beforeEach(() => {
    page = new Form0418Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
