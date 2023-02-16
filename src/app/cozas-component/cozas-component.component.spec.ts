import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CozasComponentComponent } from './cozas-component.component';

describe('CozasComponentComponent', () => {
  let component: CozasComponentComponent;
  let fixture: ComponentFixture<CozasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CozasComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CozasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
