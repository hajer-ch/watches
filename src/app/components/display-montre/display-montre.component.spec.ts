import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMontreComponent } from './display-montre.component';

describe('DisplayMontreComponent', () => {
  let component: DisplayMontreComponent;
  let fixture: ComponentFixture<DisplayMontreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayMontreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
