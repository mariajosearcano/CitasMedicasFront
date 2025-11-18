import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteListar } from './paciente-listar';

describe('PacienteListar', () => {
  let component: PacienteListar;
  let fixture: ComponentFixture<PacienteListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
