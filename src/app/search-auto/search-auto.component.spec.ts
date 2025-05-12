import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachAutoComponent } from './search-auto.component';

describe('SerachAutoComponent', () => {
  let component: SerachAutoComponent;
  let fixture: ComponentFixture<SerachAutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerachAutoComponent]
    });
    fixture = TestBed.createComponent(SerachAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
