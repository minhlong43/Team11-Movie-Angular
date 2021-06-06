import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProxyService } from 'src/app/core/services/proxy.service';

@Component({
  selector: 'app-he-thong-rap',
  templateUrl: './he-thong-rap.component.html',
  styleUrls: ['./he-thong-rap.component.scss'],
})
export class HeThongRapComponent implements OnInit {
  constructor(
    private proxyService: ProxyService,
    private activatedRoute: ActivatedRoute
  ) {}
  maPhim: any;
  mangHeThongRap = [];
  ngOnInit(): void {
    this._layThongTinHeThongRap();
    this.getParamFromURL();
  }
  getParamFromURL(): void {
    this.maPhim = this.activatedRoute.snapshot.paramMap.get('id');
  }
  _layThongTinHeThongRap(): void {
    const uri = 'QuanLyRap/LayThongTinHeThongRap';
    this.proxyService.get(uri).subscribe((data) => {
      this.mangHeThongRap = data;
    });
  }
}
