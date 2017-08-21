import { MatchAnalyzerPage } from './app.po';

describe('match-analyzer App', () => {
  let page: MatchAnalyzerPage;

  beforeEach(() => {
    page = new MatchAnalyzerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
