import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuFooterComponent } from './menu-footer/menu-footer.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { RevenueAndExpenditureComponent } from './revenue-and-expenditure/revenue-and-expenditure.component';
import { ReportReComponent } from './report-re/report-re.component';
import { SalesProfitComponent } from './sales-profit/sales-profit.component';
import { CalenderComponent } from './calender/calender.component';
import { MenuReportComponent } from './menu-report/menu-report.component';
import { ReportWarehouseComponent } from './report-warehouse/report-warehouse.component';

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
    ReportWarehouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
