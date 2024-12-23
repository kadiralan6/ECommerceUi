import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constApi } from '../constants';
import { ResultModel } from '../models/result.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private http:HttpClient) 
  {  }
  /*data body aynı şeyler*/ 
  post<T>(apiUrl:string,body:any,callBack:(rest:T)=>void,errorCallBack?:()=>void){
    this.http.post<ResultModel<T>>(`${constApi}/${apiUrl}`,body,{
      headers:{
        "Authorization":"Bearer "+"token"
      }
    }).subscribe({
      /*next :(res:any)=>{

      },*/
      next:(res)=>{
        if(res.data){
          callBack(res.data);
        }
      },
      error:(err:HttpErrorResponse)=>{
          if(errorCallBack){
            errorCallBack();
          }
      }
    })
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
