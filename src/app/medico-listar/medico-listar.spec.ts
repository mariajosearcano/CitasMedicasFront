import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoListar } from './medico-listar';

describe('MedicoListar', () => {
  let component: MedicoListar;
  let fixture: ComponentFixture<MedicoListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoListar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoListar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
