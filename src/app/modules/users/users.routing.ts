import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersPageComponent} from "./pages/user-page/users-page.component";
import {NewUserPageComponent} from "./pages/new-user-page/new-user-page.component";

const routes: Routes = [
  {path: 'users', component: UsersPageComponent},
  {path: 'new-user', component: NewUserPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRouting {}
