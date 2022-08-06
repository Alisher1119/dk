import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {TopbarComponent} from "./topbar/topbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";

@NgModule({
  declarations: [
    AuthComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule.forRoot(),
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
  ]
})
export class AuthModule {
}
