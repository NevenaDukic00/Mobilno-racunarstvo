import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string = "http://localhost:8000/api/login";
  constructor(private http: HttpClient) { }

  login(user:User):Observable<any>{
    return this.http.post(this.url,user);
  }

  //videti ovo i za registraciju
  logout(user:User):Observable<any>{
    return this.http.post(this.url,user);
  
  }
  public getUserStatus() {
   return sessionStorage.getItem('currentUser');
  }

  public setSessionData(res:any){
    console.log(res);
    if(res.success=="true"){
    sessionStorage.setItem('token', res.access_token);
    sessionStorage.setItem('user', String(res.user.email));
    sessionStorage.setItem('userId', String(res.user.id));
    this.setUserStatus();
    }
  }

  public setUserStatus(){
    if(sessionStorage.getItem('user')=="admin@gmail.com"){
      sessionStorage.setItem('currentUser','admin');
    }else{
      console.log("Obican user!");
      sessionStorage.setItem("currentUser","user");
    }
  }
  public logOut(){
    sessionStorage.clear();
  }
}
