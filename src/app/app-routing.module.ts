import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './common/dashboard/dashboard.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'state',
    loadChildren: () =>
      import('./states/states.module').then((m) => m.StatesModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'vaccine',
    loadChildren: () =>
      import('./vaccine/vaccine.module').then((m) => m.VaccineModule),
  },
  {
    path: "**",component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
