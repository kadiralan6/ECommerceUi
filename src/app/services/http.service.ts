import { constApi } from './../constants';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultModel } from '../models/result.model';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api = 'http://localhost:5177/api';
  constructor( private http:HttpClient, private error:ErrorService) 
  {  }
  /*data body aynı şeyler*/ 
  post<T>(apiUrl: string, body: any, callBack: (res: T) => void, errorCallBack?: () => void): void {
    this.http.post<ResultModel<T>>(`${this.api}/${apiUrl}`, body)
      .subscribe({
        next: (res) => {
          if (res.data) {
            callBack(res.data); // Başarılı sonuç callback'e gönderiliyor
          }
        },
        error: (err: HttpErrorResponse) => {
          this.error.errorHandler(err);// Hata yönetimi

          if (errorCallBack) {
            errorCallBack(); // Hata callback'i varsa çalıştır
          }
        }
      });
  }
  get<T>(apiUrl: string, callBack: (res: T) => void, errorCallBack?: () => void) {
    this.http.get<T>(`${this.api}/${apiUrl}`).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          callBack(res);
        }
      },
      error: (err: HttpErrorResponse) => {
        this.error.errorHandler(err);

        if (errorCallBack) {
          errorCallBack();
        }
      }
    });
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
