import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminModule } from "./admin/admin.module";
import { HomeModule } from "./home/home.module";

const routes: Routes = [
  { path: "", loadChildren: () => HomeModule },

  { path: "", loadChildren: () => AdminModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
