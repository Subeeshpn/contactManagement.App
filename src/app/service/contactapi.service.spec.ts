import { TestBed } from '@angular/core/testing';

import { ContactapiService } from './contactapi.service';

describe('ContactapiService', () => {
  let service: ContactapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
