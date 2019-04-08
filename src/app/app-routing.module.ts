import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard]  },
  { path: 'list', loadChildren: './list/list.module#ListPageModule', canActivate: [AuthGuard] },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule', canActivate: [AuthGuard] },
  { path: 'game', loadChildren: './game/game.module#GamePageModule', canActivate: [AuthGuard]  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'match-list', loadChildren: './match-list/match-list.module#MatchListPageModule' },
  { path: 'games', loadChildren: './games/games.module#GamesPageModule' },  { path: 'match-detail', loadChildren: './match-detail/match-detail.module#MatchDetailPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
