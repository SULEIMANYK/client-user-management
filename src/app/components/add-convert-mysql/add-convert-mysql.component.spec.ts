import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConvertMysqlComponent } from './add-convert-mysql.component';

describe('AddConvertMysqlComponent', () => {
  let component: AddConvertMysqlComponent;
  let fixture: ComponentFixture<AddConvertMysqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConvertMysqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConvertMysqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
