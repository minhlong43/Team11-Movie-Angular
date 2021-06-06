import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProxyService } from './proxy.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = environment.urlApi;
  listMovie = [
    {
      maPhim: 'number',
      tenPhim: 'string',
      biDanh: 'string',
      trailer: 'string',
      hinhAnh: 'string',
      moTa: 'string',
      maNhom: 'string',
      ngayKhoiChieu: 'string',
      danhGia: 'number',
    },
  ];

  private danhSachPhim = new BehaviorSubject({});
  sharingDanhSachPhim = this.danhSachPhim.asObservable();

  constructor(private proxyService: ProxyService) {}
  getDataMovie(): Observable<any> {
    const apiDataMovie =
      this.apiUrl + '/QuanLyPhim/LayDanhSachPhim?maNhom=GP08';
    return this.proxyService.get(apiDataMovie);
  }
  getDataMoviePlus(): Observable<any> {
    const apiDataMovie =
      this.apiUrl + '/QuanLyPhim/LayDanhSachPhim?maNhom=GP09';
    return this.proxyService.get(apiDataMovie);
  }

  getDetailMovie(idMovie: string): Observable<any> {
    const apiDataMovie =
      this.apiUrl + '/QuanLyPhim/LayThongTinPhim?MaPhim=' + idMovie;
    return this.proxyService.get(apiDataMovie);
  }

  sharingDataDanhSachPhim(data): void {
    this.danhSachPhim.next(data);
  }
}
