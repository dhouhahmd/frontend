import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FootComponent } from './foot/foot.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    FootComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,ClarityModule
  ]
  ,exports:[    HeaderComponent,
    FootComponent,
    SideNavComponent]
})
export class CoreModule { }
