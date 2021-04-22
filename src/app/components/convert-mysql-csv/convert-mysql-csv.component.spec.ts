import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertMysqlCsvComponent } from './convert-mysql-csv.component';

describe('ConvertMysqlCsvComponent', () => {
  let component: ConvertMysqlCsvComponent;
  let fixture: ComponentFixture<ConvertMysqlCsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertMysqlCsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertMysqlCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
