import { NgModule } from "@angular/core";
import { ViewDashboardComponent } from './components';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestComponent } from './components/test.component';
import { CommonModule } from '@angular/common';
import { DashboardRootComponent } from './components/dashboard-root/dashboard-root.component';
import { UiModule } from 'src/app/modules/ui/ui.module';

@NgModule({
  declarations: [
    ViewDashboardComponent, 
    TestComponent, 
    DashboardRootComponent
  ],
  imports: [DashboardRoutingModule, CommonModule, UiModule],
})
export class DashboardModule {}