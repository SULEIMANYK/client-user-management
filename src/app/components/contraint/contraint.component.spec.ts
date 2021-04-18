import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraintComponent } from './contraint.component';

describe('ContraintComponent', () => {
  let component: ContraintComponent;
  let fixture: ComponentFixture<ContraintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContraintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
