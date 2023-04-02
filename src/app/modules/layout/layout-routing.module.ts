import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DestinationDetailsComponent } from '../destination/components/destination-details/destination-details.component';
// import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.component').then((comp) => comp.HomeComponent),
      },
      {
        path: 'destination',
        loadComponent: () =>
          import('../destination/destination.component').then(
            (comp) => comp.DestinationComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
