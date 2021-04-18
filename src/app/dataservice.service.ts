import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  constructor(private http: HttpClient) {}

  getdata(type: string): Observable<any> {
    return this.http.get('http://localhost:8080/afficherTable?user=springangular&password=root&nom_table='+type);
  }
}
