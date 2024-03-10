import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuFooterComponent } from './components/menu-footer/menu-footer.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { OrderComponent } from './components/order/order.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ConfirmOrderComponent } from './components/confirm-order/confirm-order.component';
import { RevenueAndExpenditureComponent } from './components/revenue-and-expenditure/revenue-and-expenditure.component';
import { ReportReComponent } from './components/report-re/report-re.component';
import { SalesProfitComponent } from './components/sales-profit/sales-profit.component';
import { CalenderComponent } from './components/calender/calender.component';
import { MenuReportComponent } from './components/menu-report/menu-report.component';
import { ReportWarehouseComponent } from './components/report-warehouse/report-warehouse.component';
import { ProductListComponent } from './components/warehouse/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuFooterComponent,
    WarehouseComponent,
    OrderComponent,
    CreateOrderComponent,
    ConfirmOrderComponent,
    RevenueAndExpenditureComponent,
    ReportReComponent,
    SalesProfitComponent,
    CalenderComponent,
    MenuReportComponent,
    ReportWarehouseComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
