import { LoadDetailsModule } from './load-details.module';

describe('LoadDetailsModule', () => {
  let loadDetailsModule: LoadDetailsModule;

  beforeEach(() => {
    loadDetailsModule = new LoadDetailsModule();
  });

  it('should create an instance', () => {
    expect(loadDetailsModule).toBeTruthy();
  });
});
