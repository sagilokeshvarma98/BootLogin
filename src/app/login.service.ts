import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  checkLoginCreds(obj:any) {
   return this.http.post("http://localhost:9091/checkUser",obj);
  }
}
