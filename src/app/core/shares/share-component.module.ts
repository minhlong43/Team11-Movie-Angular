import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatVeNhanhComponent } from 'src/app/share/dat-ve-nhanh/dat-ve-nhanh.component';
import { HeThongRapComponent } from 'src/app/share/he-thong-rap/he-thong-rap.component';
import { HethongrapItemsComponent } from 'src/app/share/he-thong-rap/hethongrap-items/hethongrap-items.component';
import { ThongTinLichChieuComponent } from 'src/app/share/he-thong-rap/hethongrap-items/thong-tin-lich-chieu/thong-tin-lich-chieu.component';
import { LichChieuTheoPhimComponent } from 'src/app/share/he-thong-rap/hethongrap-items/lich-chieu-theo-phim/lich-chieu-theo-phim.component';
import { ModalComponent } from 'src/app/share/modal/modal.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    DatVeNhanhComponent,
    HeThongRapComponent,
    HethongrapItemsComponent,
    ThongTinLichChieuComponent,
    LichChieuTheoPhimComponent,
    ModalComponent,
  ],
  exports: [DatVeNhanhComponent, HeThongRapComponent, ModalComponent],
  imports: [CommonModule, MaterialModule],
})
export class ShareComponentModule {}
