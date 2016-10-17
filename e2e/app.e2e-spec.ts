import { MlApiTestPage } from './app.po';

describe('ml-api-test App', function() {
  let page: MlApiTestPage;

  beforeEach(() => {
    page = new MlApiTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
