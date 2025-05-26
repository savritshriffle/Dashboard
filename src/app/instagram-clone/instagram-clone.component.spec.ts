import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InstagramCloneComponent } from './instagram-clone.component';
import { DataService } from './service/data.service';
import { InstagramCloneRoutingModule } from './instagram-clone-routing.module';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';

describe('InstagramCloneComponent', () => {
  let component: InstagramCloneComponent;
  let fixture: ComponentFixture<InstagramCloneComponent>;
  let mockService: {[key: string]: string | number | any} = {};

  beforeEach( async() => {
    mockService = {
      getData: jasmine.createSpy('getData').and.returnValues(of([
        {
          "id": "1",
          "userImage": "https://avatar.iran.liara.run/public/boy",
          "username": 'New_One',
          "imageUrl": "https://avatar.iran.liara.run/public/boy",
          "caption": 'caption',
          "hashtags": [],
          "likes": 1,
          "leked": false,
          "comments": [],
          }
      ])),
      getUsreData: jasmine.createSpy('getUsreData').and.returnValue(of({
        username: 'New_One'
      })),
      updateData: jasmine.createSpy('updateData').and.returnValue(of({}))
    },

    await TestBed.configureTestingModule({
      declarations: [InstagramCloneComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        CommonModule,
        InstagramCloneRoutingModule,
        MatIconModule,
        MatDividerModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        FormsModule,
        MatButtonModule
      ],
      providers: [{provide: DataService,'userValue': mockService}],
    }).compileComponents();
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component Instagram-clone', () => {
    expect(component).toBeTruthy();
  });

  // it('should be called getData and getUserData method', () => {
  //   component.ngOnInit();
  //    expect(component.post[0].length).toBe(1);
  //    expect(component.user.username).toBe(1);
  // });

  // it('should be click like button to called onLike', () => {
  //   const value = component.post[0].likes;
  //   component.onLike(1);
  //   expect(component.post[0].likes).toBe(value + 1);
  //   expect(component.post[0].liked).toBeTrue();

  //   component.onLike(1);
  //   expect(component.post[0].likes).toBe(value),
  //   expect(component.post[0].liked).toBeFalse();
  // });

  // it("should be called openText to open commnet input", () => {
  //   component.openText(1)
  //   expect(component.showComments[1]).toBeTrue();

  //   component.openText(1)
  //   expect(component.showComments[1]).toBeFalse();
  // });

  // it("should be called onComment to add comments", () => {
  //   component.onComment(1);
  //   component.commentInput[1] = "New_One";
    
  //   expect(component.post[0].comments.length).toBe(1);
  //   expect(component.post[0].comments[0].text).toBe('New_One');
  //   expect(component.commentInput[1]).toBe('')
  // });
});
