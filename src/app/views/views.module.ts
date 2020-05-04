import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ViewsHomeComponent, StatisticComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule
  ]
})
export class ViewsModule { }
