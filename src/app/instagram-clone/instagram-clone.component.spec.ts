import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramCloneComponent } from './instagram-clone.component';

describe('InstagramCloneComponent', () => {
  let component: InstagramCloneComponent;
  let fixture: ComponentFixture<InstagramCloneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramCloneComponent]
    });
    fixture = TestBed.createComponent(InstagramCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
