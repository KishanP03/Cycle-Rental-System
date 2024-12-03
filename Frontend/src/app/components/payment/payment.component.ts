import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  cycle: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const state = window.history.state;
    this.cycle = state.cycle || {
      name: 'Unknown Cycle',
      price: '0',
      image: 'assets/default-cycle.jpg',
    }; // Default values if state is empty
  }

  processPayment(method: string) {
    alert(`Payment via ${method} is successful!`);
  }
}
