import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Medico } from '../Models/Medico';
import { Router } from '@angular/router';
import { MedicoService } from '../Services/MedicoService.service';

@Component({
  selector: 'medico-crear',
  imports: [FormsModule],
  templateUrl: './medico-crear.html',
  styleUrl: './medico-crear.css',
})
export class MedicoCrear {
  medico: Medico;

  especialidades: string[];
  constructor(private route: Router, private medicoService: MedicoService) {
    this.medico = new Medico();
    this.especialidades = [
      'Cardiología',
      'Dermatología',
      'Neurología',
      'Pediatría',
      'Psiquiatría',
      'Oncología',
      'Ginecología',
      'Oftalmología',
      'Ortopedia',
      'Endocrinología'
    ];
    this.especialidades.sort();
  }

  registrarMedico() {
    this.medicoService.addMedico(this.medico).subscribe(data => {
      console.log(data);
      this.goToMedicos();
    });
  }

  goToMedicos() {
    this.route.navigate(['/medico-listar']);
  }

}
