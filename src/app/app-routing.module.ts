import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { AlbumsComponent } from './albums/albums.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'upcoming',
    component: UpcomingComponent,
  },
  {
    path: 'songs',
    component: SongsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
