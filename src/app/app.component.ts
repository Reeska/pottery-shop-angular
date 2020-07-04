import {Component} from '@angular/core';
import {LibraryService} from './library.service';

@Component({
  selector: 'app-root',
  template: `
    <ui-header>
      <h1><a routerLink="/">Pottery Shop Angular</a></h1>
      <ui-navbar>
        <ui-search (valueChanged)="onValueChanged($event)" (enterPressed)="onEnter()"></ui-search>
        <a routerLink="/cart">
          <ui-cart-link count="2"></ui-cart-link>
        </a>
      </ui-navbar>
    </ui-header>
    <ui-main>
      <router-outlet></router-outlet>
    </ui-main>
  `,
})
export class AppComponent {
  constructor(
    private libraryService: LibraryService
  ) {
  }

  onValueChanged(event: CustomEvent<string>) {
    console.log('valueChanged', event.detail);
    this.libraryService.search$.next(event.detail);
  }

  onEnter() {
    console.log('enter pressed');
  }
}
