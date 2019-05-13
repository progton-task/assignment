import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient,HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs';
import { map,catchError } from 'rxjs/operators';
const httpOptions = {
  headers:new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable()

export class DataService {

  constructor(private http: HttpClient) {}
  getuserdetails(){
    return this.http.get<any>('http://jsonplaceholder.typicode.com/users')
        .pipe(map(item => {
            return item;
        }));
}

getblogdetails(){
  return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map(item => {
          return item;
      }));
}

}