import { TryAngularTestingPage } from './app.po';

describe('try-angular-testing App', function() {
  let page: TryAngularTestingPage;

  beforeEach(() => {
    page = new TryAngularTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
