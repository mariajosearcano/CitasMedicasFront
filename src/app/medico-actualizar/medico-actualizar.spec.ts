import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoActualizar } from './medico-actualizar';

describe('MedicoActualizar', () => {
  let component: MedicoActualizar;
  let fixture: ComponentFixture<MedicoActualizar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicoActualizar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoActualizar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
