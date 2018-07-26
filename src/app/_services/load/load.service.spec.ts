import { TestBed, inject } from '@angular/core/testing';

import { LoadService } from './load.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadService]
    });
  });

  it('should be created', inject([LoadService], (service: LoadService) => {
    expect(service).toBeTruthy();
  }));
});
