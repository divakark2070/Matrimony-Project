import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseurl = "http://localhost:8081/";

  get(api:string){
    return this.http.get(this.baseurl + api)
  };

  post(api:string, data:any){
    return this.http.post(this.baseurl + api, data )
  };

  put(api:string, data:any){
    return this.http.put(this.baseurl + api, data)
  };

  delete(api:string){
    return this.http.delete(this.baseurl + api)
  };

  

}
