import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrupacionHijoCComponent } from './agrupacion-hijo-c.component';

describe('AgrupacionHijoCComponent', () => {
  let component: AgrupacionHijoCComponent;
  let fixture: ComponentFixture<AgrupacionHijoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrupacionHijoCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrupacionHijoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
