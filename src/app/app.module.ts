import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilmsComponent } from './films/films.component';
import { FilmModalComponent } from './film-modal/film-modal.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule} from '@angular/router';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilmsComponent,
    FilmModalComponent,
    FilmDetailComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    FilmModalComponent
  ]
})
export class AppModule { }
