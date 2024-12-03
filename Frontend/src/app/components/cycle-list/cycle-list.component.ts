import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Cycle } from '../../models/cycle';
import { CycleService } from '../../services/cycle.service';

@Component({
  selector: 'app-cycle-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
   <div class="cycle-list">
      <div *ngFor="let cycle of cycles" class="cycle-card">
        <img [src]="cycle.imagePath" alt="{{ cycle.name }}" class="cycle-image">
        <div class="cycle-info">
          <h3>{{ cycle.name }}</h3>
          <p>Price: {{ cycle.price }}</p>
          <p>{{ cycle.description }}</p>
          <!-- Pass the cycle ID dynamically -->
          <button [routerLink]="['/cycle-details', cycle.id]">View Details</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .cycle-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5em;
        padding: 2em;
        max-width: 1200px;
        margin: 0 auto;
      }

      .cycle-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1em;
        border: 1px solid #ddd;
        border-radius: 8px;
        transition: box-shadow 0.3s;
        text-align: center;
      }

      .cycle-card:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      }

      .cycle-image {
        width: 280px;
        height: 200px;
        border-radius: 8px;
        margin-bottom: 1em;
      }

      .cycle-info h3 {
        margin: 0;
        font-size: 1.2em;
        font-weight: bold;
      }

      .cycle-info p {
        font-size: 1em;
        margin: 0.5em 0;
      }

      .cycle-info button {
        margin-top: 1em;
        padding: 0.5em 1em;
        font-size: 0.9em;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      .cycle-info button:hover {
        background-color: #0056b3;
      }
    `
  ]
})
export class CycleListComponent implements OnInit{
  cycles : Cycle[];


  constructor(private cycleservice : CycleService){}

  ngOnInit(): void {
      this.getCycles();
  }

  private getCycles(){
    this.cycleservice.cycleList().subscribe(data => {
      this.cycles = data;
    });
  }
}

