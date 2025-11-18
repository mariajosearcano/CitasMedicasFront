import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cita } from '../Models/Cita';
import { Medico } from '../Models/Medico';
import { Paciente } from '../Models/Paciente';
import { ActivatedRoute, Router } from '@angular/router';
import { CitaService } from '../Services/CitaService.service';

@Component({
  selector: 'cita-actualizar',
  imports: [FormsModule],
  templateUrl: './cita-actualizar.html',
  styleUrl: './cita-actualizar.css',
})
export class CitaActualizar {
  cita: Cita;
  idCita: number;
  paciente: Paciente;
  medico: Medico;

  constructor(
    private router: Router,
    private ruta: ActivatedRoute,
    private citaService: CitaService
  ) { }

  ngOnInit() {
    this.idCita = Number(this.ruta.snapshot.params['idCita']);
    console.log('Id Cita: ' + this.idCita);
    this.citaService.getCitaById(this.idCita).subscribe((data) => {
      this.cita = data;

    });
    console.log(this.cita);
  }

  actualizarCita() {
    this.citaService.editCita(this.idCita, this.cita).subscribe((data) => {
      this.goToCitaLista();
    });
  }
  goToCitaLista() {
    this.router.navigate(['/cita-listar']);
  }
}
