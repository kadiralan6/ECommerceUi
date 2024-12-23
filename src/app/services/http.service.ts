import { constApi } from './../constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultModel } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient) 
  {  }
  /*data body aynı şeyler*/ 
  post<T>(url: string, body: any): Promise<T> {
    return this.http.post<T>(`${constApi}/${url}`, body).toPromise();
  }
  
 /* Bu alttaki yapı default bir yapı
 post(){
    this.http.post(`Api`,null,{
      headers:{
        "Authorization":"Bearer "+"token"
      }
    }).subscribe({
      next :(res:any)=>{

      },
      error:(err:HttpErrorResponse)=>{

      }
    })
  }*/
}
