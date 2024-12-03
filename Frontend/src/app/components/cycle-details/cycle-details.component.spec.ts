import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleDetailsComponent } from './cycle-details.component';

describe('CycleDetailsComponent', () => {
  let component: CycleDetailsComponent;
  let fixture: ComponentFixture<CycleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CycleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CycleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
