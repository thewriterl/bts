import { FilmsComponent } from './films/films.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent
  },
  {
    path: 'film/:id',
    component: FilmDetailComponent
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
