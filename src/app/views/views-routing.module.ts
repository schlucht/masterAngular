import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticComponent } from './statistic/statistic.component';


const routes: Routes = [
    { path: '', component: ViewsHomeComponent, children: [
        {path: './views/', component: StatisticComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
