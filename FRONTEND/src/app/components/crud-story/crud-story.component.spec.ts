import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudStoryComponent } from './crud-story.component';

describe('CrudStoryComponent', () => {
  let component: CrudStoryComponent;
  let fixture: ComponentFixture<CrudStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
