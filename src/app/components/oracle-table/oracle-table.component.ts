import {ChangeDetectorRef, ElementRef, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {AfficherTableServiceService} from '../../services/afficher-table-service.service';
import {TableEntity} from '../../model/TableEntity';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Component } from '@angular/core';
import persons from '../afficher-table/data-table-demo1-data';
import { DataTableResource } from 'angular7-data-table';
import { DataserviceService } from 'src/app/dataservice.service';
@Component({
  selector: 'app-oracle-table',
  templateUrl: './oracle-table.component.html',
  styleUrls: ['./oracle-table.component.css']
})
export class OracleTableComponent  {
  user: TableEntity = new TableEntity();
  errorMessage: string;
  itemResource = new DataTableResource(persons);
  items = [];
  itemCount = 0;
  limits = [10, 20, 40, 80];
  tableData: any;

  value = '';
  displayedColumns: string[] = ['nom_table'];
  constructor(private cdRef: ChangeDetectorRef, private dataserviceService :DataserviceService, private afficherTableServiceService: AfficherTableServiceService, private router: Router) {
   
  }
  ngOnInit() {
    // this.dataserviceService.getdata('root').subscribe(res => {
    //   this.tableData = res;
    // });
  }

  search(){
    this.dataserviceService.getdata('').subscribe(res => {
      this.tableData = res;
    });
  }
  // findAllUsers(){
  //   this.authService.findAllUsers().subscribe(data => {
  //     this.userList = data;
  //     this.dataSource.data = data;
  //   });
  // }
  // @HostListener('input') oninput() {
  //   this.mdbTablePagination.searchText = this.searchText;
  // }


  reloadItems(params) {
    this.itemResource.query(params).then(items => this.items = items);
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.jobTitle;
  }




  affichertable(form :any) {
    this.afficherTableServiceService.getdata(form.value).subscribe(data => {
      this.tableData  = data;
      // this.router.navigate(['/profile']);
    }, err => {
      this.errorMessage = 'Username or password is incorrect';
    });
  }

}

