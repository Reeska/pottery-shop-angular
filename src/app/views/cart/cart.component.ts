import {Component} from '@angular/core';
import {books} from '../../constants/books';

@Component({
  selector: 'app-cart',
  template: `
    <ui-cart [items]="items" [total]="total" [totalWithPromo]="totalWithPromo"></ui-cart>
  `,
})
export class CartComponent {
  items = books.slice(0, 2);
  total = 65;
  totalWithPromo = 50;
}
