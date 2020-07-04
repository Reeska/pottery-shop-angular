import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PotteryModule} from '@pottery-ui/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksComponent} from './views/books/books.component';
import {CartComponent} from './views/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PotteryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
