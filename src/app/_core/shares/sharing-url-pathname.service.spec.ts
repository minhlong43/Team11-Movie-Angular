import { TestBed } from '@angular/core/testing';

import { SharingUrlPathnameService } from './sharing-url-pathname.service';

describe('SharingUrlPathnameService', () => {
  let service: SharingUrlPathnameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingUrlPathnameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
