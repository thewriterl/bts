import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http , Headers, Response, RequestOptions } from '@angular/http';
import {isViewDebugError} from "@angular/core/src/view/errors";


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient ) { }

  apiKey = '?api_key=ed38b3d37aa049454b6828b74c22a218';
  baseUrl = 'http://localhost:1700/api/'
  // baseUrl = 'https://api.themoviedb.org/3';
  // urlMostPopular = 'https://api.themoviedb.org/3/discover/movie?api_key=ed38b3d37aa049454b6828b74c22a218&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

  getFilms(): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    return this.http.get(this.baseUrl + 'films',{withCredentials: true});
  }

  getFilmById(id): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    return this.http.get(this.baseUrl + 'films/' + id ,{withCredentials: true});
  }
}
