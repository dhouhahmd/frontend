import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,ClarityModule,BrowserAnimationsModule,RouterModule,
    UserModule,CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
