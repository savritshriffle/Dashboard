import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogboxComponent } from './dialog-box.component';

describe('AboutComponent', () => {
  let component: DialogboxComponent;
  let fixture: ComponentFixture<DialogboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogboxComponent]
    });
    fixture = TestBed.createComponent(DialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});