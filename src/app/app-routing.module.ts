import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IsAuthGuard} from "./core/guards/is-auth.guard";
import {AuthGuard} from "./core/guards/auth.guard";
import {NonAuthComponent} from "./layout/non-auth/non-auth.component";
import {AuthComponent} from "./layout/auth/auth.component";

const routes: Routes = [
  {
    path: '',
    component: NonAuthComponent,
    loadChildren: () => import('./layout/non-auth/non-auth.module').then(m => m.NonAuthModule),
    canLoad: [IsAuthGuard]
  },
  {
    path: 'cabinet',
    component: AuthComponent,
    loadChildren: () => import('./layout/auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
