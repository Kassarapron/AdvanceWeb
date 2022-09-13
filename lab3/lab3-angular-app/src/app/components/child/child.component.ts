import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() parentData!: number;

  @Output() messageEvent = new EventEmitter<number>();

  childData!: number;

  constructor() { console.log('Constructor Work!') }

  ngOnChanges(){
    console.log('ngOnChanges work!');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck work!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit work!');
  }
  
  ngAfterContentChecked(): void {
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

  ngOnInit(): void {
    this.childData = 0;
  }

  onClick2Parent(){
    this.childData += 1;
    this.messageEvent.emit(this.childData)
  }

}
