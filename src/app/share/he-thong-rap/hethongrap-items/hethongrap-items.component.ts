import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProxyService } from 'src/app/core/services/proxy.service';

@Component({
  selector: 'app-hethongrap-items',
  templateUrl: './hethongrap-items.component.html',
  styleUrls: ['./hethongrap-items.component.scss'],
})
export class HethongrapItemsComponent implements OnInit {
  @Input() itemMaHeThongRap;
  @Input() chiso;
  mangCumRap = [];
  mangLichChieu = [];
  maPhim: any;
  constructor(
    private proxyService: ProxyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._layThongTinLichChieu();
    this.getParamFromURL();
  }
  getParamFromURL(): void {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id');
  }
  handleActive(listCumRap, cumRap) {
    let dem = 0;
    let indexActive = 0;

    for (let index in listCumRap) {
      if (listCumRap[index].danhSachPhim[0].maPhim == this.maPhim) {
        if (listCumRap[index].maCumRap == cumRap.maCumRap) {
          return index;
        }
      } else dem++;
    }
    if (dem == listCumRap.length) return 0;
  }
  _layThongTinLichChieu(): void {
    const uri = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.itemMaHeThongRap}&maNhom=GP10`;
    this.proxyService.get(uri).subscribe((data) => {
      this.mangLichChieu = data;
    });
  }
}
