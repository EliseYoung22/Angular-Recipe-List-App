import { RecipeListAppPage } from './app.po';

describe('recipe-list-app App', function() {
  let page: RecipeListAppPage;

  beforeEach(() => {
    page = new RecipeListAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
