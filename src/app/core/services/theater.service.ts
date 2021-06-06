import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProxyService } from './proxy.service';

@Injectable({
  providedIn: 'root',
})
export class TheaterService {
  apiUrl = environment.urlApi;
  listTheater = [
    {
      maHeThongRap: '',
      tenHeThongRap: '',
      biDanh: '',
      logo: '',
    },
  ];
  listCumRap = [
    {
      maCumRap: '',
      tenCumRap: '',
      diaChi: '',
      danhSachRap: [
        {
          maRap: '',
          tenRap: '',
        },
      ],
    },
  ];
  listLichChieu = [
    {
      lstCumRap: [
        {
          danhSachPhim: [
            {
              lstLichChieuTheoPhim: [
                {
                  maLichChieu: '',
                  maRap: '',
                  tenRap: '',
                  ngayChieuGioChieu: '',
                  giaVe: '',
                },
              ],
              maPhim: '',
              tenPhim: '',
              hinhAnh: '',
            },
          ],
          maCumRap: '',
          tenCumRap: '',
          diaChi: '',
        },
      ],
      maHeThongRap: '',
      tenHeThongRap: '',
      logo: '',
      mahom: '',
    },
  ];
  listLichChieuTheoRap = [
    {
      heThongRapChieu: [
        {
          cumRapChieu: [
            {
              lichChieuPhim: [
                {
                  maRap: '',
                  tenRap: '',
                  ngayChieuGioChieu: '',
                  giaVe: '',
                  thoiLuong: '',
                },
              ],
              maPhim: '',
              tenPhim: '',
              biDanh: '',
              trailer: '',
              hinhAnh: '',
              moTa: '',
              maNhom: '',
              ngayKhoiChieu: '',
              danhGia: '',
            },
          ],
        },
      ],
    },
  ];
  private dataTheater = new BehaviorSubject({});
  public theaterModal = this.dataTheater.asObservable();
  constructor(private proxyService: ProxyService) {}
  getTheater(): Observable<any> {
    const apiDataTheater = this.apiUrl + '/QuanLyRap/LayThongTinHeThongRap';
    return this.proxyService.get(apiDataTheater);
  }
  getCumRap(): Observable<any> {
    const apiDataTheater =
      this.apiUrl +
      '/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap={maHeThongRap}';
    return this.proxyService.get(apiDataTheater);
  }
  getLichChieu(): Observable<any> {
    const apiDataTheater =
      this.apiUrl +
      '/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap={maHeThongRap}&maNhom=GP08';
    return this.proxyService.get(apiDataTheater);
  }
  getLichChieuTheoRap(): Observable<any> {
    const apiDataTheater =
      this.apiUrl + '/QuanLyRap/LayThongTinLichChieuPhim?MaPhim={maPhim}';
    return this.proxyService.get(apiDataTheater);
  }
}
