import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ResetComponent} from './reset/reset.component';
import {MainComponent} from './main/main.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProblemsComponent} from './problems/problems.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzAlertModule} from "ng-zorro-antd/alert";


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    MainComponent,
    DashboardComponent,
    ProblemsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    TranslateModule.forRoot(),
    RouterModule,
    NzSelectModule,
    NzTypographyModule,
    NzIconModule,
    NzAlertModule,
  ]
})
export class PagesModule {
}
