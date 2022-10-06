import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CarsPageComponent} from './pages/cars-page/cars-page.component';
import {LoggedOnlyLayoutComponent} from '../shared/components/logged-only-layout/logged-only-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedOnlyLayoutComponent,
    children: [
      {
        path: 'all',
        component: CarsPageComponent,
        title: 'Cars',
      },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarsRoutingModule {
}
