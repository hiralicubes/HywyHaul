import { LoadListModule } from './load-list.module';

describe('LoadListModule', () => {
  let loadListModule: LoadListModule;

  beforeEach(() => {
    loadListModule = new LoadListModule();
  });

  it('should create an instance', () => {
    expect(loadListModule).toBeTruthy();
  });
});
