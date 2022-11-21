import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/front/home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  // Front Routes
  { path: '', redirectTo:'web/home',pathMatch:'full' },
  { path: 'web', redirectTo:'web/home',pathMatch:'full' },
  { path: 'web', loadChildren: () => import('./modules/front/front.module').then(m => m.FrontModule) },
  //Auth Routes
  { path: 'login', redirectTo:'auth/login',pathMatch:'full' },
  { path: 'register', redirectTo:'auth/register',pathMatch:'full' },
  { path: 'auth', redirectTo:'auth/login',pathMatch:'full'},
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  //Admin Routes
  { path: 'admin', redirectTo:'admin/dashboard',pathMatch:'full'},
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  //Wild Card Route
  { path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
