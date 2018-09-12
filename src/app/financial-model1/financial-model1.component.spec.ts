import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialModel1Component } from './financial-model1.component';

describe('FinancialModel1Component', () => {
  let component: FinancialModel1Component;
  let fixture: ComponentFixture<FinancialModel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialModel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialModel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
