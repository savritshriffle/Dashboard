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
import { HttpClientModule } from '@angular/common/http';

describe('InstagramCloneComponent', () => {
  let component: InstagramCloneComponent;
  let fixture: ComponentFixture<InstagramCloneComponent>;
  let mockService: {[key: string]: string | number | any} = {};

  beforeEach( async() => {
    mockService = {
      getData: jasmine.createSpy('getData').and.returnValues(of([
        {
          "id": "1",
          "username": 'New_One',
          "userImage": "https://avatar.iran.liara.run/public/boy",
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
        MatButtonModule,
        HttpClientModule
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

  it('should be called getData and getUserData method', () => {
    const service = TestBed.inject(DataService)
    const mockResponse = { mockService: 'test data' };
    spyOn(service, 'getData').and.returnValue(of(mockResponse))
    service.getData().subscribe((mock: any) => {
      expect(mock).toEqual(mockResponse);
    });

    const user = {user : 'username'}
    spyOn(service, 'getUsreData').and.returnValue(of(user))
    service.getUsreData().subscribe((user: any) => {
      expect(user).toEqual(user);
    })
  
  });

  // it('should be click like button to called onLike', () => {
  //   const service = TestBed.inject(DataService)
  //   const mockResponse = { mockService};
  //   spyOn(service, 'getData').and.returnValue(of(mockResponse))
  //   service.getData().subscribe((component: any) => {
  //     expect(component).toEqual(mockResponse);
  //     console.log(component)
  //     const value = component.post[0].likes;
     
  //     component.onLike(1);
  //     expect(component.post[0].likes).toBe(value + 1);
  //     expect(component.post[0].liked).toBeTrue();

  //     component.onLike(1);
  //     expect(component.post[0].likes).toBe(value),
  //     expect(component.post[0].liked).toBeFalse();
  //   });
  // });

  // it("should be called openText to open commnet input", () => {
  //   component.openText(1)
  //   expect(component.showComments[1]).toBeTrue();

  //   component.openText(1)
  //   expect(component.showComments[1]).toBeFalse();
  // });

  // it("should be called onComment to add comments", () => {
  //   const service = TestBed.inject(DataService)
  //   const mockResponse = { mockService: 'test data' };
  //   spyOn(service, 'getData').and.returnValue(of(mockResponse))
  //   service.getData().subscribe((component: any) => {
  //     expect(component).toEqual(mockResponse);
    
  //     component.onComment(1, 1);
  //     component.commentInput[1] = "New_One";
      
  //     expect(component.post.comments.length).toBe(1);
  //     expect(component.post.comments[0].text).toBe('New_One');
  //     expect(component.commentInput[1]).toBe('')
  //   });
  // });

  // it("should called delete comments", () => {
  //   const service = TestBed.inject(DataService)
  //   const mockResponse = { mockService: 'test data' };
  //   spyOn(service, 'getData').and.returnValue(of(mockResponse))
  //     service.getData().subscribe((component: any) => {
  //     expect(component).toEqual(mockResponse);
  //     component.onDelete(2,1);
  //     expect(component.post.commnets[0].splice(1,1)).toBe(1)
  //   })
  // })

  // it('should be called isEdit functionality', () => {
  //   const service = TestBed.inject(DataService)
  //   const mockResponse = { mockService: 'test data' };
  //   spyOn(service, 'getData').and.returnValue(of(mockResponse))
  //     service.getData().subscribe((component: any) => {
  //     component.onEdit(1, 0, 0);
  //     const value = component.post.commnets[0].text;
  //     component.post.commentInput[0] = value;
  //     const newValue = component.commentInput[0];
  //     component.post.comments[0].text = newValue;

  //     expect(component.post.comments[0]).toBe(value);
  //     expect(component.post.commentInput).toBe(1);
  //     expect(component.post.comments[0]).toBe(newValue);
  //   })
  // })
});


