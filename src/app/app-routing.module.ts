import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ChartComponent } from './pages/chart/chart.component';

const routes: Routes = [
  {path: '', redirectTo: 'collections', pathMatch: 'full'},
  {path: 'collections', component: CollectionsComponent},
  {path: 'chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
