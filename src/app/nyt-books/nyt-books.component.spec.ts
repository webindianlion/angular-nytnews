import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytBooksComponent } from './nyt-books.component';

describe('NytBooksComponent', () => {
  let component: NytBooksComponent;
  let fixture: ComponentFixture<NytBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
