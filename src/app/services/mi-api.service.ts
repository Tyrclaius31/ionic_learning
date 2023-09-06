import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MiApiService {
  keyrest = '123';
  urlrest = 'https://jsonplaceholder.typicode.com/posts';
  headers: any;

  constructor(
    private http: HttpClient
  ){
    this.headers = new HttpHeaders();
    this.headers.append("Accept",'application/json');
    this.headers.append("Content-Type",'Application/json');
    this.headers.append("Acces-Control-Allow-Origin",'*');
    this.headers.append("Key",this.keyrest);
  }

  obtener(){
    let Headers = new HttpHeaders().set("Content-Type",'application/json');
    return this.http.get(`${this.urlrest}`);
  }
}
