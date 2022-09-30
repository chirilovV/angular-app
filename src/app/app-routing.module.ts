import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/pages/home-page.component';
import {NewsPageComponent} from './modules/news/pages/news-page/news-page.component';
import {PageNotFoundComponent} from './modules/core/components/not-found-404/page-not-found.component';
import {AppRouteEnum} from './modules/core/Enums/appRouteEnum';
import {CanDeactivateGuard} from './modules/users/gurads/can-deactivate-guard.service';
import {TimerComponent} from './modules/shared/components/timer/timer.component';
import {DefaultPageComponent} from './modules/default/pages/default-page/default-page.component';
import {RegisterPageComponent} from './modules/accounts/pages/register/register-page/register-page.component';
import {LoginPageComponent} from './modules/accounts/pages/login/login-page/login-page.component';
import {AuthGuardService} from './modules/accounts/guards/authGuardService';

const routes: Routes = [
  {
    path: AppRouteEnum.Users,
    loadChildren: () => import('./modules/users/users.module').then(
      m => m.UsersModule
    )
  },
  {
    path: AppRouteEnum.Cars,
    loadChildren: () => import('./modules/cars/cars.module').then(
      m => m.CarsModule
    )
  },
  {
    path: AppRouteEnum.UserDetails,
    loadChildren: () => import('./modules/auth-user/auth-user.module').then(
      m => m.AuthUserModule
    )
  },
  {
    path: 'timer',
    component: TimerComponent
  },
  {
    path: AppRouteEnum.Register,
    component: RegisterPageComponent,
    title: 'Register'
  },
  {
    path: AppRouteEnum.Login,
    component: LoginPageComponent,
    title: 'Login'
  },
  {
    path: AppRouteEnum.Home,
    component: HomePageComponent,
    data: {title: 'Home'},
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.News,
    component: NewsPageComponent,
    data: {title: 'News'},
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.Default,
    component: DefaultPageComponent,
    data: {title: 'Welcome'}
  },
  {
    path: AppRouteEnum.Error404,
    component: PageNotFoundComponent,
    data: {title: 'Error 404'}
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    CanDeactivateGuard
  ],
})

export class AppRoutingModule {
}
