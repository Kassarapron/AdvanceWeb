import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstyleComponents } from './ng-style.component';

describe('NgStyleComponent', () => {
  let component: NgstyleComponents;
  let fixture: ComponentFixture<NgstyleComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgstyleComponents ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgstyleComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
