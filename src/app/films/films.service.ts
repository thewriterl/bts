import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Response, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {isViewDebugError} from "@angular/core/src/view/errors";


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient ) { }

  apiKey = '?api_key=ed38b3d37aa049454b6828b74c22a218';
  baseUrl = 'https://api.themoviedb.org/3';
  urlMostPopular = 'https://api.themoviedb.org/3/discover/movie?api_key=ed38b3d37aa049454b6828b74c22a218&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  // getFilms(): Observable<any> {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.get(this.urlMostPopular).map((res: any) => {
  //     return res.json();
  //   });
  // }

  // getFilmes(): Observable<any> {
  //   return this.http.get(this.urlMostPopular).subscribe((res: Response) => {
  //     return res.json();
  //   });
  // }

  getFilms(): Observable<any> {
    return this.http.get(this.urlMostPopular);
  }

  getFilmById(id): Observable<any> {
    debugger
    console.log(this.baseUrl + '/movie/' + id + this.apiKey);
    return this.http.get(this.baseUrl + '/movie/' + id + this.apiKey);
  }

}
