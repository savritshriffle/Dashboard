import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationForm } from './registration-form.component';

describe('NewTestComponent', () => {
  let component: RegistrationForm;
  let fixture: ComponentFixture<RegistrationForm>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationForm]
    });
    fixture = TestBed.createComponent(RegistrationForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
 
  });
});