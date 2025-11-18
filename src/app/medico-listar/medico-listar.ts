import { Component } from '@angular/core';

import { Medico } from '../Models/Medico';

import { MedicoService } from '../Services/MedicoService.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'medico-listar',
  imports: [FormsModule],
  templateUrl: './medico-listar.html',
  styleUrl: './medico-listar.css',
})
export class MedicoListar {
  medicos: Medico[];
  currentPage = 0;
  totalPages = 0;

  constructor(
    private medicoService: MedicoService, private route: Router
  ) { }

  ngOnInit() {
    this.listadoMedicos()
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.listadoMedicos();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listadoMedicos();
    }
  }

  listadoMedicos() {
    this.medicoService.getMedicosPage(this.currentPage, 10).subscribe((data) => {
      this.medicos = data.content;
      this.totalPages = data.totalPages;
      //this.route.navigate(['/medico-listar']);
    });
  }

  deletePaciente( idMedico : number ) {
    //console.log(id);
    this.medicoService.deleteMedico(idMedico).subscribe({
      next: () => this.ngOnInit()
    })
  }
  goToCrearMedico() {
    this.route.navigate(['/medico-crear']);
  }
   editarMedico(idMedico: number) {
    this.route.navigate(['/medico-actualizar', idMedico]);
  }
}
