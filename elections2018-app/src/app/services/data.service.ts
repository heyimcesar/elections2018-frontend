import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class DataService {

    //private apiURL = 'https://lab-web-ene-2018.herokuapp.com/';
    private apiURL = 'https://6ac2b2aa.ngrok.io/';

    constructor(private http: HttpClient) { }

    getPolitcianTweets() : Observable<any> {
        return this.http.get( this.apiURL + 'tweets/');
    }
  
}
