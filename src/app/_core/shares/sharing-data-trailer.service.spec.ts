import { TestBed } from '@angular/core/testing';

import { SharingDataTrailerService } from './sharing-data-trailer.service';

describe('SharingDataTrailerService', () => {
  let service: SharingDataTrailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingDataTrailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
