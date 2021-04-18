import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTocsvComponent } from './db-tocsv.component';

describe('DbTocsvComponent', () => {
  let component: DbTocsvComponent;
  let fixture: ComponentFixture<DbTocsvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbTocsvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbTocsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
