import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteActualizar } from './paciente-actualizar';

describe('PacienteActualizar', () => {
  let component: PacienteActualizar;
  let fixture: ComponentFixture<PacienteActualizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacienteActualizar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacienteActualizar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
