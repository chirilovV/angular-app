import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from './pages/user-details/user-details.component';

const routes: Routes = [{
  path: '',
  component: UserDetailsComponent,
  title: 'Profile',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthUserRoutingModule {
}
