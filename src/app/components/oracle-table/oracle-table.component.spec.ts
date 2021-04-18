import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracleTableComponent } from './oracle-table.component';

describe('OracleTableComponent', () => {
  let component: OracleTableComponent;
  let fixture: ComponentFixture<OracleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
