import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert.component';
import { CustomerComponent } from './customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    AlertComponent,
    CustomerComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const alertEl = createCustomElement(AlertComponent, {injector : this.injector});
    customElements.define('app-alert', alertEl);

    const customerEl = createCustomElement(CustomerComponent, {injector : this.injector});
    customElements.define('app-customer', customerEl);

  }
 }
