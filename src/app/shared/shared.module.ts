import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LeftBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    LeftBarComponent
  ]
})
export class SharedModule { }
