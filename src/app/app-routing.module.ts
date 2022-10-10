import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './modules/home/pages/home-page.component';
import {NewsPageComponent} from './modules/news/pages/news-page/news-page.component';
import {PageNotFoundComponent} from './modules/core/components/not-found-404/page-not-found.component';
import {AppRouteEnum} from './modules/core/Enums/appRouteEnum';
import {CanDeactivateGuard} from './modules/users/gurads/can-deactivate-guard.service';
import {LoginPageComponent} from './modules/authentication/pages/login-page/login-page.component';
import {AuthGuardService} from './modules/core/guards/authGuardService';
import {DefaultPageComponent} from './modules/default/pages/default-page/default-page.component';
import {DefaultGuardService} from './modules/core/guards/defaultGuardService';
import {LoggedOnlyLayoutComponent} from './modules/shared/components/logged-only-layout/logged-only-layout.component';
import {DefaultLayoutComponent} from './modules/shared/components/default-layout/default-layout.component';
import {RegisterPageComponent} from './modules/authentication/pages/register-page/register-page.component';
import {
  ClientSideStatisticsComponent
} from './modules/statistics/client-side-statistics/client-side-statistics.component';
import {
  ServerSideStatisticsComponent
} from './modules/statistics/server-side-statistics/server-side-statistics.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedOnlyLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
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
    ]
  },
  {
    path: AppRouteEnum.Register,
    component: DefaultLayoutComponent,
    canActivate: [DefaultGuardService],
    children: [
      {
        path: '',
        component: RegisterPageComponent,
        title: 'Register',
      },
    ]
  },
  {
    path: AppRouteEnum.Login,
    component: DefaultLayoutComponent,
    canActivate: [DefaultGuardService],
    children: [
      {
        path: '',
        component: LoginPageComponent,
        title: 'Login',
      },
    ]
  },
  {
    path: AppRouteEnum.Home,
    component: LoggedOnlyLayoutComponent,
    title: 'Home',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomePageComponent,
        title: 'Cars',
      },]
  },
  {
    path: AppRouteEnum.News,
    component: LoggedOnlyLayoutComponent,
    title: 'News',
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: NewsPageComponent,
        title: 'Cars',
      },
    ]
  },
  {
    path: AppRouteEnum.Users,
    loadChildren: () => import('./modules/users/users.module').then(
      m => m.UsersModule
    ),
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.Cars,
    loadChildren: () => import('./modules/cars/cars.module').then(
      m => m.CarsModule
    ),
    canActivate: [AuthGuardService]
  },
  {
    path: AppRouteEnum.Default,
    component: DefaultLayoutComponent,
    title: 'Welcome',
    children: [
      {
        path: '',
        component: DefaultPageComponent,
      },
    ]
  },
  {
    path: AppRouteEnum.Error404,
    component: PageNotFoundComponent,
    title: 'Error 404'
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
