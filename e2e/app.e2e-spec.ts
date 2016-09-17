import { DragonboatHousePage } from './app.po';

describe('dragonboat-house App', function() {
  let page: DragonboatHousePage;

  beforeEach(() => {
    page = new DragonboatHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
