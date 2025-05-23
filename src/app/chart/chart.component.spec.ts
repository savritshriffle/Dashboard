import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockChartComponent } from './chart.component';

describe('ChartComponent', () => {
  let component: StockChartComponent;
  let fixture: ComponentFixture<StockChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockChartComponent]
    });
    fixture = TestBed.createComponent(StockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
