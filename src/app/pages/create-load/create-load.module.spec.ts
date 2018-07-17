import { CreateLoadModule } from './create-load.module';

describe('CreateLoadModule', () => {
  let createLoadModule: CreateLoadModule;

  beforeEach(() => {
    createLoadModule = new CreateLoadModule();
  });

  it('should create an instance', () => {
    expect(createLoadModule).toBeTruthy();
  });
});
