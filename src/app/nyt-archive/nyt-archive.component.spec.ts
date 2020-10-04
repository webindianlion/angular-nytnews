import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytArchiveComponent } from './nyt-archive.component';

describe('NytArchiveComponent', () => {
  let component: NytArchiveComponent;
  let fixture: ComponentFixture<NytArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
