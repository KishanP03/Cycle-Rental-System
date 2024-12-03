import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];

  addToCart(item: any) {
    this.cartItems.push(item);
    console.log(`${item.name} added to cart`);
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    console.log('Cart cleared');
  }
}
