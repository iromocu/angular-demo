import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalancesComponent } from './pages/balances/balances.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SharesComponent } from './pages/shares/shares.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'balances', component: BalancesComponent},
  { path: 'shares', component: SharesComponent},
  { path: 'movements', component: MovementsComponent},
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
