import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from "./contact/contact.component";
import { NavComponent } from './nav/nav.component';
import { LazyLoadingModule } from "./lazy-loading.module";
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    NavComponent,
    StoreModule.forRoot({ })

  ],
  imports: [
    BrowserModule,
    LazyLoadingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
