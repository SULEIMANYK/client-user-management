import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';

import {
MatButtonModule,
MatCardModule,
MatInputModule,
MatListModule, MatToolbarModule, MatSelectModule,
MatFormFieldModule, MatTableModule,
MatPaginatorModule, MatSortModule,
MatProgressBarModule, MatIconModule
 } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { AfficherTableComponent } from './components/afficher-table/afficher-table.component';
import {DataTableModule} from 'angular7-data-table';
import { TableComponent } from './table/table.component';
import { DbTocsvComponent } from './components/db-tocsv/db-tocsv.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContraintComponent } from './components/contraint/contraint.component';
import { OracleTableComponent } from './components/oracle-table/oracle-table.component';
import { DoConsultComponent } from './components/do-consult/do-consult.component';
import { DoConsultOracleTableComponent } from './components/do-consult-oracle-table/do-consult-oracle-table.component';
import { DisplayOracleTableComponent } from './components/display-oracle-table/display-oracle-table.component';
import { AddConvertMysqlComponent } from './components/add-convert-mysql/add-convert-mysql.component';
import { ConvertMysqlCsvComponent } from './components/convert-mysql-csv/convert-mysql-csv.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserComponent,
    UserListComponent,
    AfficherTableComponent,
    TableComponent,
    DbTocsvComponent,
    NavBarComponent,
    ContraintComponent,
    OracleTableComponent,
    DoConsultComponent,
    DoConsultOracleTableComponent,
    DisplayOracleTableComponent,
    AddConvertMysqlComponent,
    ConvertMysqlCsvComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatProgressBarModule,
    MatIconModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
