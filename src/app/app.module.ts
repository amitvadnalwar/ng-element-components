import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert.component';

import { CustomersComponent } from './customers/customers.component';
import { BillToCustomerComponent } from './bill-to-customer/bill-to-customer.component';
import { ShipToCustomerComponent } from './ship-to-customer/ship-to-customer.component';
import { EndCustomerComponent } from './end-customer/end-customer.component';

import {MatStepperModule} from '@angular/material/stepper';
import { PrimaryAccountComponent } from './primary-account/primary-account.component';
import { CreateAddressComponent } from './create-address/create-address.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CustomersComponent,
    BillToCustomerComponent,
    ShipToCustomerComponent,
    EndCustomerComponent,
    PrimaryAccountComponent,
    CreateAddressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AlertComponent,
    CustomersComponent,
    CreateAddressComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const alertEl = createCustomElement(AlertComponent, {injector : this.injector});
    customElements.define('app-alert', alertEl);

    const customersEl = createCustomElement(CustomersComponent, {injector : this.injector});
    customElements.define('app-customers', customersEl);

    const createAddress = createCustomElement(CreateAddressComponent, {injector : this.injector});
    customElements.define('app-create-address', createAddress);

  }
 }
