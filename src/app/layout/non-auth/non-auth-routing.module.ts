import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "@cp/login/login.component";
import {ResetComponent} from "@cp/reset/reset.component";
import {RegisterComponent} from "@cp/register/register.component";
import {MainComponent} from "@cp/main/main.component";

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full",
    data: {animation: 'login'}
  },
  {
    path: 'reset',
    component: ResetComponent,
    data: {animation: 'reset'}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {animation: 'register'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonAuthRoutingModule {
}
