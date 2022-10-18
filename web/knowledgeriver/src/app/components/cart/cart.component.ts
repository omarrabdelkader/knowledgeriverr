import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { CartService } from 'src/app/services/cartService/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  products: Book[] = [];
  private cartSub: Subscription | undefined;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.listCustomerCart();
    this.cartSub = this.cartService
      .addCartUpdateListener()
      .subscribe((cart: Book[]) => {
        this.products = cart;
      });
  }

  ngOnDestroy(): void {
    this.cartSub?.unsubscribe;
  }

  CalculateTotalPrice(): number {
    let totalPrice = 0;
    this.products.map((product) => {
      totalPrice += parseInt(product.price, 10);
    });
    return totalPrice;
  }
}
