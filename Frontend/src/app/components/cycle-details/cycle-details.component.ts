import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cycle-details',
  standalone:true,
  imports:[CommonModule],
  template: `
    <div *ngIf="cycle" class="cycle-details-container">
    <img [src]="cycle.imageUrl" alt="{{ cycle.name }}" style="width: 300px; height: 300px;" class = "cycle-image">
    <div class="cycle-details-content">
      <h1>{{ cycle.name }}</h1>
      <p>Price: {{ cycle.price }}</p>
      <p>{{ cycle.description }}</p>
      <div class="action-buttons">
      <button (click)="addToCart()">Add to Cart</button>
      <button (click)="buyNow()">Buy Now</button>
    </div>
      </div>
    </div>
    <div *ngIf="!cycle">
      <p>Cycle details not found.</p>
    </div>
  `,
   styles: [
    `
.cycle-details-container {
  display: flex;
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 175px;
  margin-left: 150px;
  max-width: 1200px;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #ffffff;
  transition: box-shadow 0.4s ease, transform 0.4s ease;
}


/* Image styling */
.cycle-image {
  flex: 1;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
  padding: 10px;
  background-color: #fafafa;
}

.cycle-image img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}


/* Content section styling */
.cycle-details-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}

.cycle-details-content h1 {
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #222;
}

.cycle-details-content p {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
}

/* Price styling */
.cycle-details-content .price {
  font-size: 2rem;
  font-weight: bold;
  color: #b12704; /* Amazon-style price color */
  margin-bottom: 20px;
}

/* Action buttons */
.cycle-details-content .action-buttons {
  margin-top: 20px;
  display: flex;
  gap: 15px;
}

.cycle-details-content .action-buttons button {
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007185; /* Amazon button color */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cycle-details-content .action-buttons button:hover {
  background-color: #005f68;
  transform: scale(1.05);
}

.cycle-details-content .action-buttons button:active {
  transform: scale(0.98);
}

/* Hover scale effect for content */
.cycle-details-content {
  transform: scale(1);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
  `
  ]
})
export class CycleDetailsComponent implements OnInit {
  cycle: any = null;

  cycles = [
    {
      id: 1,
      name: 'Mountain Bike',
      price: 150,
      description: 'Perfect for off-road trails and rugged terrain.',
      imageUrl: '/mountain.jpeg'
    },
    {
      id: 2,
      name: 'Road Bike',
      price: 120,
      description: 'Ideal for city rides and smooth paths.',
      imageUrl: '/road.jpeg'
    },
    {
      id: 3,
      name: 'Electric Bike',
      price: 300,
      description: 'Assisted pedaling for a relaxed ride.',
      imageUrl: '/electric.jpeg'
    },
    {
      id: 4,
      name: 'Hybrid Bike',
      price: 200,
      description: 'Versatile bike for multiple terrains.',
      imageUrl: 'hybrid.jpeg'
    },
    {
      id: 5,
      name: 'Kids Bike',
      price: 80,
      description: 'Perfect for children and beginners.',
      imageUrl: 'road.jpeg'
    },
    {
      id: 6,
      name: 'Folding Bike',
      price: 250,
      description: 'Compact and easy to store.',
      imageUrl: 'folding.jpeg'
    },
    {
      id: 7,
      name: 'Tandem Bike',
      price: 400,
      description: 'Ride with a partner on this two-seater bike.',
      imageUrl: 'tandem.jpeg'
    },
    {
      id: 8,
      name: 'Cruiser Bike',
      price: 180,
      description: 'Comfortable and stylish for leisure rides.',
      imageUrl: 'cruiser.jpeg'
    },
    {
      id: 9,
      name: 'BMX Bike',
      price: 100,
      description: 'Sturdy bike for tricks and jumps.',
      imageUrl: 'bmx.jpeg'
    }
  ];

  constructor(private route: ActivatedRoute, private cartService: CartService,private router : Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cycle = this.cycles.find((c) => c.id === id);
  }

  addToCart() {
    this.cartService.addToCart(this.cycle);
    alert(`${this.cycle.name} has been added to the cart!`);
  }

  buyNow() {
    const selectedCycle = {
      name: this.cycle.name,
      price: this.cycle.price,
      imageUrl: this.cycle.imageUrl,
    };
    this.router.navigate(['/payment'], { state: { cycle: selectedCycle } });
  }
}