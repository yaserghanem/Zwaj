import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppYasserComponent } from './app.component';
import { ValueComponent } from './Value/Value.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppYasserComponent,
      ValueComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule ,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppYasserComponent
   ]
})
export class AppModule { }
