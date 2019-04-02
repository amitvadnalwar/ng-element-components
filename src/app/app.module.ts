import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert.component';

import {MatStepperModule} from '@angular/material/stepper';
import { CreateAddressComponent } from './create-address/create-address.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
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
    CreateAddressComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const alertEl = createCustomElement(AlertComponent, {injector : this.injector});
    customElements.define('app-alert', alertEl);

    const createAddress = createCustomElement(CreateAddressComponent, {injector : this.injector});
    customElements.define('app-create-address', createAddress);

  }
 }
