import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOracleTableComponent } from './display-oracle-table.component';

describe('DisplayOracleTableComponent', () => {
  let component: DisplayOracleTableComponent;
  let fixture: ComponentFixture<DisplayOracleTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOracleTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOracleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
