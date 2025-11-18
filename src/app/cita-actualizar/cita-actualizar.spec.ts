import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaActualizar } from './cita-actualizar';

describe('CitaActualizar', () => {
  let component: CitaActualizar;
  let fixture: ComponentFixture<CitaActualizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaActualizar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaActualizar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
