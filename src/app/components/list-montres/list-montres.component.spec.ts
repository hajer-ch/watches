import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMontresComponent } from './list-montres.component';

describe('ListMontresComponent', () => {
  let component: ListMontresComponent;
  let fixture: ComponentFixture<ListMontresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMontresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMontresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
