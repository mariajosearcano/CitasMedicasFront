import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../Models/Paciente';
import { Router } from '@angular/router';
import { PacienteService } from '../Services/PacienteService.service';

@Component({
  selector: 'paciente-crear',
  imports: [FormsModule],
  templateUrl: './paciente-crear.html',
  styleUrl: './paciente-crear.css',
})
export class PacienteCrear {
  paciente: Paciente;
  constructor( private route: Router, private pacienteService: PacienteService ) {
    this.paciente = new Paciente();
  }

  registrarPaciente() {
    this.pacienteService.addPaciente(this.paciente).subscribe(data => {
      console.log(data);
      this.goToPacientes();
    });
  }

  goToPacientes() {
    this.route.navigate(['/paciente-listar']);
  }

}
