import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesAgrupacionCComponent } from './componentes-agrupacion-c.component';

describe('ComponentesAgrupacionCComponent', () => {
  let component: ComponentesAgrupacionCComponent;
  let fixture: ComponentFixture<ComponentesAgrupacionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesAgrupacionCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesAgrupacionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
