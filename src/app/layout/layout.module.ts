import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthModule} from "./auth/auth.module";
import {NonAuthModule} from "./non-auth/non-auth.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthModule,
    NonAuthModule,
  ]
})
export class LayoutModule {
}
