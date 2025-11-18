import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteCrear } from './paciente-crear';

describe('PacienteCrear', () => {
  let component: PacienteCrear;
  let fixture: ComponentFixture<PacienteCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
