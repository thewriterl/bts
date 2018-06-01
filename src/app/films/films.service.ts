import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Response, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient ) { }

  serverMovieDB = 'https://api.themoviedb.org/3/movie/550?api_key=ed38b3d37aa049454b6828b74c22a218';

  // getFilms(): Observable<any> {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.get(this.serverMovieDB).map((res: any) => {
  //     return res.json();
  //   });
  // }

  // getFilmes(): Observable<any> {
  //   return this.http.get(this.serverMovieDB).subscribe((res: Response) => {
  //     return res.json();
  //   });
  // }

  getFilms(): Observable<any> {
    return this.http.get(this.serverMovieDB);
  }

}