import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {AppComponent} from './app.component';

@NgModule({
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

  const routes: Routes = [
    { path: 'filmDetail', component: FilmDetailComponent },
    { path: '/', component: AppComponent}
  ];
