import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCardComponent } from './tag-card.component';

describe('StatsCardComponent', () => {
  let component: TagCardComponent;
  let fixture: ComponentFixture<TagCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
