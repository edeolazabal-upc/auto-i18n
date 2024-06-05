import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAutoComponent } from './components/add-auto/add-auto.component';
import { ListAutoComponent } from './components/list-auto/list-auto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListAutoComponent,
    AddAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
