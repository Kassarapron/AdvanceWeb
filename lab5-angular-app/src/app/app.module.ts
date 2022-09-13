import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgstyleComponents } from './components/ng-style/ng-style.component';
import { FormsModule } from '@angular/forms';
import { NgifComponent } from './components/ngif/ngif.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { NgforComponent } from './components/ngfor/ngfor.component'

@NgModule({
  declarations: [
    AppComponent,
    NgclassComponent,
    NgstyleComponents,
    NgifComponent,
    NgswitchComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
