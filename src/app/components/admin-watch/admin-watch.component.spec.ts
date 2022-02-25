import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWatchComponent } from './admin-watch.component';

describe('AdminWatchComponent', () => {
  let component: AdminWatchComponent;
  let fixture: ComponentFixture<AdminWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
