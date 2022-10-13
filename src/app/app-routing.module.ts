import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/pages/home-page.component';
import {NewsPageComponent} from './modules/news/pages/news-page/news-page.component';
import {AppRouteEnum} from './modules/core/Enums/appRouteEnum';
import {CanDeactivateGuard} from './modules/users/gurads/can-deactivate-guard.service';
import {LoginPageComponent} from './modules/authentication/pages/login-page/login-page.component';
import {AuthGuardService} from './modules/core/guards/authGuardService';
import {LoggedOnlyLayoutComponent} from './modules/shared/components/logged-only-layout/logged-only-layout.component';
import {DefaultLayoutComponent} from './modules/shared/components/default-layout/default-layout.component';
import {RegisterPageComponent} from './modules/authentication/pages/register-page/register-page.component';
import {
  ClientSideStatisticsComponent
} from './modules/statistics/client-side-statistics/client-side-statistics.component';
import {
  ServerSideStatisticsComponent
} from './modules/statistics/server-side-statistics/server-side-statistics.component';
import {DefaultGuardService} from './modules/core/guards/defaultGuardService';
import {DefaultPageComponent} from './modules/default/pages/default-page/default-page.component';
import {CanLoadGuardService} from './modules/core/guards/canLoadGuardService';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [DefaultGuardService],
    children: [
      {
        path: AppRouteEnum.Default,
        component: DefaultPageComponent,
        title: 'Welcome',
      },
      {
        path: AppRouteEnum.Register,
        component: RegisterPageComponent,
        title: 'Register',
      },
      {
        path: AppRouteEnum.Login,
        component: LoginPageComponent,
        title: 'Login',
      },
    ]
  },

  {
    path: '',
    component: LoggedOnlyLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: AppRouteEnum.Home,
        component: HomePageComponent,
        title: 'Home',
      },
      {
        path: AppRouteEnum.News,
        component: NewsPageComponent,
        title: 'News',
      },
      {
        path: AppRouteEnum.UserStatistics,
        component: ServerSideStatisticsComponent,
        title: 'Users statistics',
      },
      {
        path: AppRouteEnum.ClientStatistics,
        component: ClientSideStatisticsComponent,
        title: 'Client statistics',
      },
      // Lazy loading
      {
        path: AppRouteEnum.Users,
        canLoad: [CanLoadGuardService],
        loadChildren: () => import('./modules/users/users.module').then(
          m => m.UsersModule
        ),
      },
      {
        path: AppRouteEnum.Cars,
        canLoad: [CanLoadGuardService],
        loadChildren: () => import('./modules/cars/cars.module').then(
          m => m.CarsModule
        ),
      },
    ]
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
