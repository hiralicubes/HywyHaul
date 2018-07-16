import { LoignModule } from './loign.module';

describe('LoignModule', () => {
  let loignModule: LoignModule;

  beforeEach(() => {
    loignModule = new LoignModule();
  });

  it('should create an instance', () => {
    expect(loignModule).toBeTruthy();
  });
});
