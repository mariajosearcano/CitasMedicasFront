import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaListar } from './cita-listar';

describe('CitaListar', () => {
  let component: CitaListar;
  let fixture: ComponentFixture<CitaListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
