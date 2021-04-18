import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client-user-management';
  connected :any
  ngOnInit() {
this.connected =localStorage.getItem('currentUser')
 if(!this.connected){
   
 }
  }
}
