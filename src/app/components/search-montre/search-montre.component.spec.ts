import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMontreComponent } from './search-montre.component';

describe('SearchMontreComponent', () => {
  let component: SearchMontreComponent;
  let fixture: ComponentFixture<SearchMontreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMontreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
