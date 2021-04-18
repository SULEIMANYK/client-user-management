import { Component, OnInit } from '@angular/core';
import {DataserviceService } from '../dataservice.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableData: any;
  value = '';
  displayedColumns: string[] = ['nom_table'];
  constructor( private dataserviceService :DataserviceService) { }

  ngOnInit() {
    this.dataserviceService.getdata('root').subscribe(res => {
      this.tableData = res;
    });
  }

  search(){
    this.dataserviceService.getdata(this.value).subscribe(res => {
      this.tableData = res;
    });
  }

}
