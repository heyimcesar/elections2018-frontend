import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterFeedbackComponent } from './twitter-feedback.component';

describe('TwitterFeedbackComponent', () => {
  let component: TwitterFeedbackComponent;
  let fixture: ComponentFixture<TwitterFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
