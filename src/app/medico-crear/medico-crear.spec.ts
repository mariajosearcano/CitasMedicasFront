import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoCrear } from './medico-crear';

describe('MedicoCrear', () => {
  let component: MedicoCrear;
  let fixture: ComponentFixture<MedicoCrear>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoCrear]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoCrear);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
