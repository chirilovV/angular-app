import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CarsPageComponent} from './pages/cars-page/cars-page.component';
import {AuthGuardService} from '../core/guards/authGuardService';

const routes: Routes = [
  {path: '', component: CarsPageComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarsRoutingModule {
}
