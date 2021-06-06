import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { ProxyService } from 'src/app/core/services/proxy.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dat-ve-nhanh',
  templateUrl: './dat-ve-nhanh.component.html',
  styleUrls: ['./dat-ve-nhanh.component.scss'],
})
export class DatVeNhanhComponent implements OnInit {
  movieService: any;
  constructor(
    private proxyService: ProxyService,
    private router: Router,
    movieService: MovieService
  ) {}
  danhSachPhim = [];
  layThongTinPhim = [];
  statusLichChieu: boolean = false;
  maPhim: any;
  select = [
    { label: 'Phim', value: '', option: [] },
    { label: 'Rạp', value: '', option: [], err: 'Vui lòng chọn phim' },
    { label: 'Ngày chiếu', value: '', option: [], err: 'Vui lòng chọn rạp' },
    {
      label: 'Suất chiếu',
      value: '',
      option: [],
      err: 'Vui lòng chọn suất chiếu',
    },
  ];

  ngOnInit(): void {
    this._LayDanhSachPhim();
  }
  _LayDanhSachPhim(): void {
    const uri = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP10';
    this.proxyService.get(uri).subscribe((data: any) => {
      this.danhSachPhim = data;
      this.select[0].option = this.danhSachPhim;
    });
  }
  _LayThongTinPhim(maPhim): void {
    if (maPhim) {
      const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
      this.proxyService.get(uri).subscribe((data: any) => {
        this._LayTenRap(data.lichChieu);
        this._LayNgayChieu(data.lichChieu, this.select[1].value);
        this._LaySuatChieu(
          data.lichChieu,
          this.select[1].value,
          this.select[2].value
        );
      });
    }
  }

  _LayTenRap(lichChieu): void {
    let mangRap = [];
    lichChieu.map((lichChieu: { thongTinRap: { tenCumRap: any } }) => {
      let index = mangRap.findIndex((rap) => {
        return rap === lichChieu.thongTinRap.tenCumRap;
      });
      if (index === -1) mangRap.push(lichChieu.thongTinRap.tenCumRap);
    });
    this.select[1].option = mangRap;
  }
  _LayNgayChieu(lichChieu, rap): void {
    let mangNgayChieu = [];
    lichChieu.map((lichChieu) => {
      if (lichChieu.thongTinRap.tenCumRap === rap) {
        let date = lichChieu.ngayChieuGioChieu.slice(0, 10);
        let index = mangNgayChieu.findIndex((ngayChieu) => {
          return ngayChieu === date;
        });
        if (index === -1) mangNgayChieu.push(date);
      }
    });
    this.select[2].option = mangNgayChieu;
  }
  _LaySuatChieu(lichChieu, rap, ngayChieu): void {
    let mangSuatChieu = [];
    lichChieu.map((lichChieu) => {
      let date = lichChieu.ngayChieuGioChieu.slice(0, 10);
      if (lichChieu.thongTinRap.tenCumRap === rap && date === ngayChieu) {
        let time = lichChieu.ngayChieuGioChieu.slice(11, 16);
        mangSuatChieu.push(time);
      }
    });
    this.select[3].option = mangSuatChieu;
  }

  getInfo(): void {
    if (this.maPhim != this.select[0].value) {
      this.maPhim = this.select[0].value;
      this.select[3].value = '';
    }

    this._LayThongTinPhim(this.select[0].value);
    if (this.select[3].value) this.statusLichChieu = true;
    else this.statusLichChieu = false;
  }
  datVe(): void {
    if (!this.statusLichChieu) {
      Swal.fire({
        text: 'Vui lòng chọn đầy đủ thông tin',
        icon: 'warning',
        confirmButtonColor: '#facea8',
        confirmButtonText: 'OK',
      });
    } else {
      if (!localStorage.getItem('user')) {
        Swal.fire({
          text: 'Bạn chưa đăng nhập',
          icon: 'warning',
          confirmButtonColor: '#facea8',
          confirmButtonText: 'OK',
        });
      } else {
        let ngayChieuGioChieu =
          this.select[2].value + 'T' + this.select[3].value + ':00';
        const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.select[0].value}`;
        this.proxyService.get(uri).subscribe((data: any) => {
          data.lichChieu.map((lichChieu) => {
            if (
              lichChieu.thongTinRap.tenCumRap === this.select[1].value &&
              lichChieu.ngayChieuGioChieu === ngayChieuGioChieu
            ) {
              this.router.navigate(['/dat-ghe/', lichChieu.maLichChieu]);
            }
          });
        });
      }
    }
  }
}
