import { FilmsService } from './../films/films.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data: any;
  id: any;
  films = {
    'post': [
      {
        'filmId': '4',
        'type': 'article',
        'header': 'this is the header',
        'content': 'dont get you sleeping on',
        'video': null
      },
      {
        'filmId': '4', 
        'type': 'video',
        'header': 'this is the video header',
        'video': 'https://pingendo.com/assets/photos/wireframe/photo-1.jpg',
        'content': 'this is the content of the video'
      }
    ]
  };

  constructor(public activatedRoute: ActivatedRoute, public filmService: FilmsService) {
    this.id = this.activatedRoute.snapshot.params.id;
  }
  
  ngOnInit() {
    this.filmService.getFilmById(this.id).subscribe((res) => {
      this.data = res;
      console.log(this.data);
    }, (err) => {
      console.log('erro');
    });
  }

}
