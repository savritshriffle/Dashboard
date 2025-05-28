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
import { By } from '@angular/platform-browser';

const postsMock = [
  {
    "id": 1,
    "username": 'New_One',
    "userImage": "https://avatar.iran.liara.run/public/boy",
    "imageUrl": "https://avatar.iran.liara.run/public/boy",
    "caption": 'caption',
    "hashtags": [],
    "likes": 1,
    "liked": false,
    "comments": [
      {
        id: Date.now(),
        username: "testUser",
        text: "comment text"
      }
    ],
  }
] 

describe('InstagramCloneComponent', () => {
  let component: InstagramCloneComponent;
  let fixture: ComponentFixture<InstagramCloneComponent>;
  let dataService: DataService;

  beforeEach( async() => {
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
      providers: [{provide: DataService,}],
    }).compileComponents();

    dataService = TestBed.inject(DataService);
    spyOn(dataService, 'getData').and.returnValue(of(postsMock))
    
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
     expect(component.post.length).toBe(1);
  });

  it('should be click like button to called onLike', () => {
    component.onLike(1);
    fixture.detectChanges();
  
    expect(component.post[0].likes).toBe(2);
    expect(component.post[0].liked).toBeTrue();
    
    component.onLike(1);
    expect(component.post[0].likes).toBe(1);
    expect(component.post[0].liked).toBeFalse();  
  });

  it("should be called openText to open commnet input", () => {
    component.openText(1);
    fixture.detectChanges();
    expect(component.showComments[1]).toBeTrue();

    component.openText(1);
    expect(component.showComments[1]).toBeFalse();
  });

  it("should be called onComment to add comments", () => {
    component.onComment(0, 1);
    fixture.detectChanges();

    expect(component.post[0].comments.length).toBe(2);
    expect(component.user.username).toBe(undefined)

    component.isShow = true;
    component.onComment(0, 1);
    expect(component.post[0].comments[0].text).toBe("New_Text");

    expect(component.commentInput[0]).toBe('');
    component.isShow = false;
  });

  it("should called delete comments", () => {
    component.onDelete(1, 1);
    fixture.detectChanges();
    expect(component.post[0].commnets.length).toBe(0);

  })

  it('should be called isEdit functionality', () => {
    component.onEdit(1, 0, 0);
    fixture.detectChanges();
    expect(component.post[0].comments[0].text).toBe('comment text');
    expect(component.commentInput[0]).toBe('comment text'); 
  })
});