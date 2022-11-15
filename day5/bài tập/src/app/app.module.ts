import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-b/component-c/component-c.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBComponent,
    ComponentCComponent
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
