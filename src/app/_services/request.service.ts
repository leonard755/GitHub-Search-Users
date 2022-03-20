import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  API: string = "https://api.github.com/users"
  constructor(
    private http: HttpClient
  ) { }

  reqGET(url: string) {
    return this.http.get<any>(this.API + url)
      .pipe(map(data => {
        return data;
      }, (err: any) => {
        return err;
      }));
  }
}
