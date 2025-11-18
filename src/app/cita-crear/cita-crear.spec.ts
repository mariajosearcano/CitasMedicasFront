import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaCrear } from './cita-crear';

describe('CitaCrear', () => {
  let component: CitaCrear;
  let fixture: ComponentFixture<CitaCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitaCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
