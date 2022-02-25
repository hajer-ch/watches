import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontreComponent } from './montre.component';

describe('MontreComponent', () => {
  let component: MontreComponent;
  let fixture: ComponentFixture<MontreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
