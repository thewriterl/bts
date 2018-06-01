import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  id: String;
  currentFilm: any;
  films = {
    'film': [
      {
        'id': '0',
        'title': 'O Poderoso Chefão',
        'description': 'Máfia',
        'cast': 'Al Pacino'
      }, {
        'id': '1',
        'title': 'Star Wars',
        'description': 'Sci-fi',
        'cast': 'Mark Hamill'
      }, {
        'id': '2',
        'title': 'Hello World',
        'description': 'desc',
        'cast': 'cast'
      }, {
        'id': '3',
        'title': '---',
        'description': '=',
        'cast': '*'
      },
    ]
  };

constructor(public activatedRoute: ActivatedRoute) {
}

ngOnInit() {
<<<<<<< HEAD
  this.currentFilm = this.films.film[this.activatedRoute.snapshot.paramMap.get('id')];
=======
  this.id = this.activatedRoute.snapshot.paramMap.get('id');
  console.log(this.id);
  this.currentFilm = this.films.film[this.id];


>>>>>>> a99fda1bd9f99da8c57b2bc79c43422e95173fdf
}

}
