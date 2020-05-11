import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { DonutsComponent } from './donuts/donuts.component';


const routes: Routes = [
  { path: 'donuts', component: DonutsComponent },
  { path: 'donuts/:id', component: DonutDetailComponent },
  { path: '', redirectTo: '/donuts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
