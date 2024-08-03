import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ClarityModule } from '@clr/angular';
import { UserRoutingModule } from './user-routing.module';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    UserComponent,
    DeleteuserComponent,
    AddComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,ClarityModule,UserRoutingModule,ReactiveFormsModule,FormsModule,
  ]
  ,exports:[UserComponent,    DeleteuserComponent]
})
export class UserModule { 
}
