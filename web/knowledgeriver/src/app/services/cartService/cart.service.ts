import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Book[] = [];
  private cartUpdated = new Subject<Book[]>();
  constructor() {}

  // GET CUSTOMER'S CART
  listCustomerCart() {
    return [...this.cart];
  }

  addCartUpdateListener() {
    return this.cartUpdated.asObservable();
  }

  // ADD ITEM TO CUSTOMER'S CART
  addCustomerCart(book: Book) {
    this.cart.push(book);
    this.cartUpdated.next([...this.cart]);
  }
}
