import { Component, OnInit, ViewChild, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterContentChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { ChildComponent  } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,OnChanges,DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy
 {
  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;

  parentData!: number;
  childData!: number;
  textMessage!: string;
  status!: string;
  public showChild = true;
  
  ngOnChanges(){
    console.log('ngOnChanges work!');
  }

  ngDoCheck(): void {
    console.log(this.textMessage)
    console.log('ngDoCheck work!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit work!');
  }
  
  ngAfterContentChecked(): void {
    if(this.textMessage == "B6216023"){
      this.status = "Your ID is OK";
    }else{
      this.status = "ERROR";
    }
    console.log('ngAfterContentChecked work!')
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked work!');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit work!');
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy work!');
  }

  constructor() { console.log('Constructor Work!'); }

  ngOnInit(): void {
    this.parentData = 0;
    this.childData = 0;
  }

  onClick2Child(){
    this.parentData += 1;
  }

  receiveData($event:any) {
    this.childData = $event;
  }

  onClickViewChild(){
    this.childComponent.onClick2Parent();
  }

  update(){
    this.showChild = !this.showChild
  }
}
