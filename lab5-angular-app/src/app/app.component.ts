import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentColorProperty!: string;

  receiveData($event : any){
    this.parentColorProperty = $event;
  }

  title = 'lab5-angular-app';
}
