import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'game', loadChildren: './game/game.module#GamePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
