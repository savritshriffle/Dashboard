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
import { mock } from './mockDummy';

describe('InstagramCloneComponent', () => {
  let component: InstagramCloneComponent;
  let fixture: ComponentFixture<InstagramCloneComponent>;
  let dataService: DataService;
  let postsMock = mock;
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
     expect(component.post.length).toBe(postsMock.length);
  });

  it('should be click like button to called onLike', () => {
    fixture.debugElement.query(By.css('.liked')).nativeElement.click(1);
    fixture.detectChanges();

    expect(component.post[0].likes).toBe(postsMock[0].likes);
    expect(component.post[0].liked).toBe(postsMock[0].liked);
    
    expect(component.post[0].likes).toBe(postsMock[0].likes);
    expect(component.post[0].liked).toBe(postsMock[0].liked); 
  });

  it("should be called openText to open commnet input", () => {
    component.openText(0);
    expect(component.showComments[0]).toBeTrue();

    component.openText(0);
    expect(component.showComments[0]).toBeFalse();
  });

  it("should be called onComment to add comments", () => {
    fixture.debugElement.query(By.css('.comment-icon')).nativeElement.click(0);
    component.onEdit(1,0,0);
    component.onDelete(1,1);

    component.onComment(0, 1);
    fixture.detectChanges();
    
    expect(component.post[0].comments.length).toBe(postsMock[0].comments.length);
    expect(component.user.username).toBeUndefined();
    
    component.onComment(0, 1);
    component.isShow = true;
    expect(component.post[0].comments[0].text).toBe(postsMock[0].comments[0].text);

    expect(component.commentInput[0]).toBe('');
    component.isShow = false;
  });

  it("should called delete comments", () => {
    fixture.debugElement.query(By.css('.comment-icon')).nativeElement.click(0);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.delete')).nativeElement.click(1,1);
    fixture.detectChanges();

    expect(component.post[0].commnets).toBeUndefined();
  });


  it('should be called isEdit functionality', () => {
    fixture.debugElement.query(By.css('.comment-icon')).nativeElement.click(0);
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('.edit')).nativeElement.click(1,0,0);
    fixture.detectChanges();
    
    expect(component.post[0].comments[0].text).toBe(postsMock[0].comments[0].text);
  });
});   