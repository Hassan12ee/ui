// import { ForgetpasswordComponent } from './../../../layout/additions/forgetpassword/forgetpassword.component';
import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
// import { code, forgotpasswordData, loginData, RegisterData } from '../../interfaces/data';
// import { Enviroment } from '../../../base/Enviroment';
import { BehaviorSubject, Observable } from 'rxjs';
// import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient , private _Router:Router,  @Inject(PLATFORM_ID) id:object) {
 if(isPlatformBrowser(id)){
  if(localStorage.getItem('userToken')){
    // this.deCodeUserData();
    _Router.navigate([localStorage.getItem('currentpage')])
  }
 }
  }

  userData:BehaviorSubject<any> = new BehaviorSubject(null);

  // signUp(data:RegisterData):Observable<any>
  // {
  //   return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/signup`, data);
  // }
  // Forgetpassword(data:forgotpasswordData):Observable<any>
  // {
  //   return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/forgotPasswords`, data);
  // }
  // verifyResetCode(data:code):Observable<any>
  // {
  //   return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/verifyResetCode`, data);
  // }

  // resetPassword(data:code):Observable<any>
  // {
  //   return this._HttpClient.put(`${Enviroment.baseUrl}/api/v1/auth/resetPassword`, data);
  // }
  // signIn(data:loginData):Observable<any>
  // {
  //   return this._HttpClient.post(`${Enviroment.baseUrl}/api/v1/auth/signin`, data);
  // }
  // deCodeUserData(){
  //   const token = JSON.stringify(localStorage.getItem('userToken'));
  //   const decoded = jwtDecode(token);
  //   this.userData.next(decoded);
  //   console.log(this.userData);
  // }
  // logOut()
  // {
  //   localStorage.removeItem("userToken");
  //   this.userData.next(null);
  //   this._Router.navigate(['/login'])
  // }
}

