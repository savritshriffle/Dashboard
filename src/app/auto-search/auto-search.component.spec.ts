import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSearchCompoent } from './auto-search.component';

describe('SerachAutoComponent', () => {
  let component: AutoSearchCompoent;
  let fixture: ComponentFixture<AutoSearchCompoent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoSearchCompoent]
    });
    fixture = TestBed.createComponent(AutoSearchCompoent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
