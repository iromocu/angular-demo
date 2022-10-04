import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalancesComponent } from './balances/balances.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MovementsComponent } from './movements/movements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharesComponent } from './shares/shares.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    BalancesComponent,
    DashboardComponent,
    MovementsComponent,
    PortfolioComponent,
    SharesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule
  ],
  exports: [
    BalancesComponent,
    DashboardComponent,
    MovementsComponent,
    PortfolioComponent,
    SharesComponent
  ]
})
export class PagesModule { }
