import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuieneComponentComponent } from './quiene-component.component';

describe('QuieneComponentComponent', () => {
  let component: QuieneComponentComponent;
  let fixture: ComponentFixture<QuieneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuieneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuieneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
