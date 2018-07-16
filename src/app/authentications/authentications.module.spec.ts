import { AuthenticationsModule } from './authentications.module';

describe('AuthenticationsModule', () => {
  let authenticationsModule: AuthenticationsModule;

  beforeEach(() => {
    authenticationsModule = new AuthenticationsModule();
  });

  it('should create an instance', () => {
    expect(authenticationsModule).toBeTruthy();
  });
});
