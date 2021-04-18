import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ProfileComponent} from './components/profile/profile.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {UserComponent} from './components/user/user.component';
import {AfficherTableComponent} from './components/afficher-table/afficher-table.component';
import {TableComponent} from './table/table.component';
import { DbTocsvComponent } from './components/db-tocsv/db-tocsv.component';
import { ContraintComponent } from './components/contraint/contraint.component';
import { OracleTableComponent } from './components/oracle-table/oracle-table.component';
import { DoConsultComponent } from './components/do-consult/do-consult.component';
import { DoConsultOracleTableComponent } from './components/do-consult-oracle-table/do-consult-oracle-table.component';
import { DisplayOracleTableComponent } from './components/display-oracle-table/display-oracle-table.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
   {path:'oracle-table', component:OracleTableComponent},
   {path:'consult-table', component:DoConsultOracleTableComponent},
   {path:'do-consult', component:DoConsultComponent},
  {path:'afficherTable', component:AfficherTableComponent},
  {path:'contraint', component:ContraintComponent},
  {path:'dbTocsv', component:DbTocsvComponent},
  {path:'tableData', component:TableComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:ProfileComponent},
  {path:'user-list', component:UserListComponent},
  {path:'user', component:UserComponent},
  {path:'user/:id', component:UserComponent},
  {path:'displayTableOracle', component:DisplayOracleTableComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
