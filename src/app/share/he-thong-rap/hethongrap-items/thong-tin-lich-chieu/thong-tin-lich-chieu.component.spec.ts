import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinLichChieuComponent } from './thong-tin-lich-chieu.component';

describe('ThongTinLichChieuComponent', () => {
  let component: ThongTinLichChieuComponent;
  let fixture: ComponentFixture<ThongTinLichChieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongTinLichChieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinLichChieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
