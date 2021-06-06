import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import {
  FormCanActiveGuard,
  DatgheCanActiveGuard,
} from "@core/guards/canactive.guard";
import { TrangChuModule } from "./trang-chu/trang-chu.module";
import { PhimModule } from "./phim/phim.module";
import { ChiTietPhimModule } from "./chi-tiet-phim/chi-tiet-phim.module";
import { DatGheModule } from "./dat-ghe/dat-ghe.module";
import { FormModule } from "./form/form.module";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      { path: "", loadChildren: () => TrangChuModule },
      { path: "trang-chu", loadChildren: () => TrangChuModule },
      {
        path: "form",
        loadChildren: () => FormModule,
        canActivate: [FormCanActiveGuard],
      },
      { path: "phim", loadChildren: () => PhimModule },
      {
        path: "chi-tiet-phim/:id",
        loadChildren: () => ChiTietPhimModule,
      },
      {
        path: "dat-ghe/:id",
        loadChildren: () => DatGheModule,
        canActivate: [DatgheCanActiveGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
