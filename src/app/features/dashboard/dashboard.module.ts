import { NgModule } from "@angular/core";
import { ViewDashboardComponent } from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [ViewDashboardComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}