import { TestBed } from '@angular/core/testing';

import { DataPhimService } from './data-phim.service';

describe('DataPhimService', () => {
  let service: DataPhimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPhimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
