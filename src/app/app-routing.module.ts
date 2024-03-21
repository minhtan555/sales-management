import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home-page/components/home/home.component';
import { CreateOrderComponent } from './features/create-order/create-order.component';
import { RevenueAndExpenditureComponent } from './features/revenue-and-expenditure/revenue-and-expenditure.component';
import { ReportReComponent } from './components/report-re/report-re.component';
import { SalesProfitComponent } from './features/sales-profit/sales-profit.component';


export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    title: "Sale Management - Home"
  },
  {
    path: "warehouse",
    title: "Sale Management - Warehouse",
    loadComponent: () => import('./features/warehouse/warehouse.component').then(m => m.WarehouseComponent)
  },
  {
    path: "order",
    title: "Sale Management - Order",
    loadComponent: () => import('./features/order/order.component').then(m => m.OrderComponent)
  },
  {
    path: "create-order",
    component: CreateOrderComponent
  },
  {
    path: "rev-exp",
    component: RevenueAndExpenditureComponent
  },
  {
    path: "report-re",
    component: ReportReComponent
  },
  {
    path: "sales-profit",
    component: SalesProfitComponent
  },
  {
    path: "",
    redirectTo: "/home", 
    pathMatch: "full",
    
  },
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
