import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytTopStoriesComponent } from './nyt-top-stories.component';

describe('NytTopStoriesComponent', () => {
  let component: NytTopStoriesComponent;
  let fixture: ComponentFixture<NytTopStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytTopStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytTopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
