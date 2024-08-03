import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UserComponent } from './user.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  { path:'List-user',component:UserComponent},
  {path:'Delete-user',component:DeleteuserComponent},
  {path:'add-user',component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { 

}
