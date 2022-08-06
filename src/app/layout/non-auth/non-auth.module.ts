import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NonAuthComponent} from "./non-auth.component";
import {NonAuthRoutingModule} from "./non-auth-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {SharedModule} from "@cs/shared.module";

@NgModule({
  declarations: [
    NonAuthComponent,
  ],
  imports: [
    CommonModule,
    NonAuthRoutingModule,
    TranslateModule.forRoot(),
    SharedModule,
  ],
})
export class NonAuthModule {
}
