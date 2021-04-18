import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {TableEntity} from '../model/TableEntity';

let API_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AfficherTableServiceService {

  constructor(private http: HttpClient) { }
  

  doconsulterID(enitity: any): Observable<any> {
    return this.http.get(API_URL + 'doconsulterID?user='+enitity.username+'&password='+enitity.password+'&nom_table='+enitity.db);
  }
  consulterTableOracle(enitity: any): Observable<any> {
    return this.http.get(API_URL + 'afficherTableOracle?user='+enitity.username+'&password='+enitity.password+'&nom_table='+enitity.db);
  }
  displayTableOracle(enitity: any): Observable<any> {
    return this.http.get(API_URL + 'afficherTableOracle?user='+enitity.username+'&password='+enitity.password+'&nom_table='+enitity.db);
  }
  getContraint(enitity: any): Observable<any> {
    return this.http.get(API_URL + 'afficherContrainte?user='+enitity.username+'&password='+enitity.password+'&nom_table='+enitity.db);
  }
  getdata(enitity: any): Observable<any> {
    return this.http.get(API_URL + 'afficherTable?user='+enitity.username+'&password='+enitity.password+'&nom_table='+enitity.db);
  }
  affichertable(user: TableEntity): Observable<any> {
    const headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.user + ':' + user.password + ':' + user.nomtable)
    } : {});

    return this.http.get<any>(API_URL + "afficherTable" , {headers})
    .pipe( map (response => {
      if (response) {
        localStorage.setItem('currentUser', JSON.stringify(response));
      }
      return response;
    }));
  }
}
