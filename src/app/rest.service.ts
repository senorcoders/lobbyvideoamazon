import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  send(endpoint, json){
    console.log("Data to send", json);
    return this.http.post(endpoint, json);
  }

  get(endpoint){
    return this.http.get(endpoint,  {responseType: 'text'});
  }

  getData(endpoint){
    return this.http.get(endpoint);
  }
}
