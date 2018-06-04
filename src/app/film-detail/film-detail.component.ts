import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FilmsService} from "../films/films.service";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  id: String;
  currentFilm: any;

constructor(public activatedRoute: ActivatedRoute, public  filmService: FilmsService) {

  this.id = this.activatedRoute.snapshot.params.id;
  debugger
}

  ngOnInit() {
    debugger
    this.filmService.getFilmById(this.id).subscribe(res => {
      this.currentFilm = res;
    });
  }

}
