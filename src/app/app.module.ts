import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NumberItemComponent } from './components/number-item/number-item.component';
import { NumberListComponent } from './components/number-list/number-list.component';
import { NumberDisplayComponent } from './components/number-display/number-display.component';
import { PriceButtonComponent } from './components/price-button/price-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NumberItemComponent,
    NumberListComponent,
    NumberDisplayComponent,
    PriceButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
