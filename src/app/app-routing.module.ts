import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { OrderComponent } from './components/order/order.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { RevenueAndExpenditureComponent } from './components/revenue-and-expenditure/revenue-and-expenditure.component';
import { ReportReComponent } from './components/report-re/report-re.component';
import { SalesProfitComponent } from './components/sales-profit/sales-profit.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    title: "Sale Management - Home"
  },
  {
    path: "warehouse",
    component: WarehouseComponent,
    title: "Sale Management - Warehouse"
  },
  {
    path: "order",
    component: OrderComponent,
    title: "Sale Management - Order"
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
    pathMatch: "prefix",
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
