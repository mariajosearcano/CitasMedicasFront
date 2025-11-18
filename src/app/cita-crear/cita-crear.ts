import { Component } from '@angular/core';
import { PacienteService } from '../Services/PacienteService.service';
import { CitaService } from '../Services/CitaService.service';
import { Paciente } from '../Models/Paciente';
import { Cita } from '../Models/Cita';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { cp } from 'node:fs';
import { Medico } from '../Models/Medico';
import { MedicoService } from '../Services/MedicoService.service';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'cita-crear',
  imports: [CommonModule, FormsModule],
  templateUrl: './cita-crear.html',
  styleUrl: './cita-crear.css',
})
export class CitaCrear {


  constructor(private pacienteService: PacienteService,
    private route: Router,
    private citaService: CitaService,
    private ruta: ActivatedRoute,
    private medicoService: MedicoService,
  ) { }

  cita: Cita = new Cita();
  medicos: Medico[];
  idPaciente: number;
  paciente: Paciente;
  medico: Medico = new Medico();


  ngOnInit() {
    this.idPaciente = this.ruta.snapshot.params['idPaciente'];
    this.pacienteService.getPacienteById(this.idPaciente).subscribe(data => {
      this.cita.idPaciente = this.idPaciente;
      this.paciente = data;
      console.log(this.paciente);
    });
    this.medicoService.getMedicos().subscribe(data => {
      this.medicos = data;
    });
  }

  goToCitas() {
    this.route.navigate(['/cita-listar']);
  }


  registrarCita() {
    forkJoin({
      medico: this.medicoService.getMedicoById(this.cita.idMedico),
      paciente: this.pacienteService.getPacienteById(this.idPaciente)
    }).subscribe(result => {

      this.cita.medico = result.medico;
      this.cita.paciente = result.paciente;

      this.citaService.addCita(this.cita).subscribe(() => {
        this.goToCitas();
      });

    });
  }


}
