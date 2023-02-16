import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBComponent } from './event-b.component';

describe('EventBComponent', () => {
  let component: EventBComponent;
  let fixture: ComponentFixture<EventBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
