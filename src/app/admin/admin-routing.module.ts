import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardCanactiveGuard } from "@core/guards/canactive.guard";
import { DashboardModule } from "./dashboard/dashboard.module";

const routes: Routes = [
  { path: "", component: AdminComponent },
  {
    path: "dashboard",
    loadChildren: () => DashboardModule,
    canActivate: [DashboardCanactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
