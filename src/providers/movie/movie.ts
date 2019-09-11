import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  ///private api_key ="8ef033f32895e0968ff6876594b219d7";
  

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }

  getLatestMovies() {                         
    return this.http.get(this.baseApiPath + '/movie/latest?api_key='+ this.getApiKey());
  }

  getPopularMovies(){
    return this.http.get(this.baseApiPath + '/movie/popular?api_key='+ this.getApiKey());
  }

  getApiKey(): string{
    return '8ef033f32895e0968ff6876594b219d7';
  }

}
