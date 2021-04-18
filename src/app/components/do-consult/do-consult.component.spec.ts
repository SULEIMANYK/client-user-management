import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoConsultComponent } from './do-consult.component';

describe('DoConsultComponent', () => {
  let component: DoConsultComponent;
  let fixture: ComponentFixture<DoConsultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoConsultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
