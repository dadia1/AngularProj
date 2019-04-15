
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class angularWithWebApiService {

  constructor(private _http: HttpClient) { }

  getMoviesList(): Observable<any> {
    return this._http.get('http://localhost:52864/api/MovieLists');
  }
}
