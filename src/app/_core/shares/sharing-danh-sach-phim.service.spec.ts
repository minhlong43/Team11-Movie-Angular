import { TestBed } from '@angular/core/testing';

import { SharingDanhSachPhimService } from './sharing-danh-sach-phim.service';

describe('SharingDanhSachPhimService', () => {
  let service: SharingDanhSachPhimService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharingDanhSachPhimService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
