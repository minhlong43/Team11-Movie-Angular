import { TestBed } from '@angular/core/testing';

import { SharingDataDatGheService } from './sharing-data-dat-ghe.service';

describe('SharingDataDatGheService', () => {
  let service: SharingDataDatGheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingDataDatGheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
