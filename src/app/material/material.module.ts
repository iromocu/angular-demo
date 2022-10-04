import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ],
  exports: [
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
