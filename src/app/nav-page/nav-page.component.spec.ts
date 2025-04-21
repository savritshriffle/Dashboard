import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPageComponent } from './nav-page.component';

describe('NavPageComponent', () => {
  let component: NavPageComponent;
  let fixture: ComponentFixture<NavPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavPageComponent]
    });
    fixture = TestBed.createComponent(NavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    //  console.log(id)
    //  const dataApi = localStorage.getItem('apiData')
    //  console.log(dataApi?.match(id))
    //  if(dataApi?.match(id)) {
    //    localStorage.removeItem(id)
    //  }//  console.log(id)
    //  const dataApi = localStorage.getItem('apiData')
    //  console.log(dataApi?.match(id))
    //  if(dataApi?.match(id)) {
    //    localStorage.removeItem(id)
    //  }
  });
});
