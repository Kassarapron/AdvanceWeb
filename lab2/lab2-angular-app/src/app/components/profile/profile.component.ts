import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id!: string;
  name!: string;
  year!: number;

  constructor() { }

  ngOnInit(): void {
      this.id = "B6216023";
      this.name = "Kassarapron Pechnok";
      this.year = 2001
  }

  getName(){
    return this.name;
  }
}