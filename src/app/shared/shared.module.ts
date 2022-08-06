import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './ui/loader/loader.component';
import {BreadcrumbsComponent} from './ui/breadcrumbs/breadcrumbs.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    LoaderComponent,
    BreadcrumbsComponent,
  ],
  exports: [
    LoaderComponent,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
  ]
})
export class SharedModule {
}
