import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartApiComponent } from './chart-api.component';

describe('ChartApiComponent', () => {
  let component: ChartApiComponent;
  let fixture: ComponentFixture<ChartApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartApiComponent]
    });
    fixture = TestBed.createComponent(ChartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
