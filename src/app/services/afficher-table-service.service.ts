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
    return this.http.get(API_URL + 'doconsulterID?user='+enitity.username+'&password='+enitity.password+'&table='+enitity.db);
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
  addConvertMysql(enitity: any): Observable<any> {
   // http://localhost:8080/ajouterConnexion?nom_base=meher&amp;login=crok&amp;mot_de_passe=root
    return this.http.get(API_URL + 'ajouterConnexion?nom_base='+enitity.nom_base+'&login='+enitity.password+'&mot_de_passe='+enitity.db);

  }
  upload(enitity: any): Observable<any> {
    return this.http.get(API_URL + '/processFileUpload',enitity.file);
  }
  ConvertMysqlCSV(enitity: any): Observable<any> {

     return this.http.get(API_URL + 'db2CSVMethode?user='+enitity.nom_base+'&password='+enitity.password+'&nom_table='+enitity.db);
 
   }
   ConvertXMLCSV(): Observable<any> {
    //http://localhost:8080/convertionXmlExcel
    return this.http.get(API_URL + 'convertionXmlExcel');

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
