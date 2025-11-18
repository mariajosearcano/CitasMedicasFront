import { Component } from '@angular/core';
import { Medico } from '../Models/Medico';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from '../Services/MedicoService.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'medico-actualizar',
  imports: [FormsModule],
  templateUrl: './medico-actualizar.html',
  styleUrl: './medico-actualizar.css',
})
export class MedicoActualizar {
  medico: Medico;
  idMedico: number;
  especialidades: string[];
  constructor(private route: Router, private medicoService: MedicoService, private ruta: ActivatedRoute) {
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


  ngOnInit() {
    this.idMedico = Number(this.ruta.snapshot.params['idMedico']);

    this.medicoService.getMedicoById(this.idMedico).subscribe((data) => {
      this.medico = data;
    });
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
