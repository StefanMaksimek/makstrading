import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderEntryComponent } from './order-entry/order-entry.component';
import { ActiveTradesComponent } from './active-trades/active-trades.component';
import { TradeHistoryComponent } from './trade-history/trade-history.component';



@NgModule({
  declarations: [
    OrderEntryComponent,
    ActiveTradesComponent,
    TradeHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
