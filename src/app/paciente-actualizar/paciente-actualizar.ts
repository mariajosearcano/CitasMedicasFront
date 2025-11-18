import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PacienteService } from '../Services/PacienteService.service';
import { Paciente } from '../Models/Paciente';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'paciente-actualizar',
  imports: [FormsModule],
  templateUrl: './paciente-actualizar.html',
  styleUrl: './paciente-actualizar.css',
})
export class PacienteActualizar {

  paciente: Paciente;
  idPaciente: number;
  nombres?: string | null;
  apellidos?: string | null;
  email?: string | null;
  fechaNacimiento: Date;


  constructor(private pacienteService: PacienteService,
    private router: Router,
    private ruta: ActivatedRoute
  ) { }


  ngOnInit() {
    this.idPaciente = Number(this.ruta.snapshot.params['id']);
    this.pacienteService.getPacienteById(this.idPaciente).subscribe((data) => {
      this.paciente = data;
      console.log(this.paciente);
    });
  }

  guardarPaciente() {
    this.pacienteService.editPaciente(this.idPaciente, this.paciente).subscribe(() => {
      this.router.navigate(['/paciente-listar']);
    });
  }

}
