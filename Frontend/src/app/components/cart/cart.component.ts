import { Component, OnInit } from '@angular/core'; 
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  // Method to navigate to payment page with selected cycle details
  buyCycle(cycle: any) {
    this.router.navigate(['/payment'], { state: { cycle } });
  }
}
