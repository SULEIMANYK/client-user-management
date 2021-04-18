import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoConsultOracleTableComponent } from './do-consult-oracle-table.component';

describe('DoConsultOracleTableComponent', () => {
  let component: DoConsultOracleTableComponent;
  let fixture: ComponentFixture<DoConsultOracleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoConsultOracleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoConsultOracleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
