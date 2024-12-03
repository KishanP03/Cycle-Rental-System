import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleListComponent } from './cycle-list.component';

describe('CycleListComponent', () => {
  let component: CycleListComponent;
  let fixture: ComponentFixture<CycleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
