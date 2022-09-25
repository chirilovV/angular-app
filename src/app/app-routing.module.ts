import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/pages/home-page.component';
import {NewsPageComponent} from './modules/news/pages/news-page/news-page.component';
import {PageNotFoundComponent} from './modules/core/components/not-found-404/page-not-found.component';
import {AppRouteEnum} from './modules/core/Enums/appRouteEnum';
import {CanDeactivateGuard} from './modules/users/gurads/can-deactivate-guard.service';
import {TimerComponent} from './modules/shared/components/timer/timer.component';
import {RegisterPageComponent} from './modules/auth/pages/register/register-page/register-page.component';
import {LoginPageComponent} from './modules/auth/pages/login/login-page/login-page.component';
import {AuthGuardService} from './modules/auth/guards/authGuardService';
import {DefaultPageComponent} from './modules/default/pages/default-page/default-page.component';

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

  {path: 'timer', component: TimerComponent},
  {path: AppRouteEnum.Register, component: RegisterPageComponent},
  {path: AppRouteEnum.Login, component: LoginPageComponent},

  {path: AppRouteEnum.Home, component: HomePageComponent, canActivate: [AuthGuardService]},
  {path: AppRouteEnum.News, component: NewsPageComponent, canActivate: [AuthGuardService]},

  {path: AppRouteEnum.Default, component: DefaultPageComponent},
  {path: AppRouteEnum.Error404, component: PageNotFoundComponent},
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
