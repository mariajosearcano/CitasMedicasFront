import { Component } from '@angular/core';
import { Cita } from '../Models/Cita';
import { CitaService } from '../Services/CitaService.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'cita-listar',
  imports: [CommonModule],
  templateUrl: './cita-listar.html',
  styleUrl: './cita-listar.css',
})
export class CitaListar {
  citas: Cita[];
  currentPage = 0;
  totalPages = 0;
  constructor(private citaService: CitaService, private route: Router) { }

  ngOnInit() {
    this.listadoCitas();
  }

  public listadoCitas() {
    this.citaService.getCitasPage(this.currentPage, 10).subscribe(data => {

      this.citas = data.content;
      this.totalPages = data.totalPages;
    });
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.listadoCitas();
    }
  }

  prevPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.listadoCitas();
    }
  }

  descargarReporte() {
    this.citaService.descargarReporte().subscribe(xml => {
      const blob = new Blob([xml], { type: 'application/xml' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'reporte.xml';
      a.click();

      window.URL.revokeObjectURL(url);
    });
  }

  editarCita(idCita: number) {
    this.route.navigate(['/cita-actualizar', idCita]);
  }

  deleteCita(idCita: number) {
    //console.log(id);
    this.citaService.deleteCita(idCita).subscribe({
      next: () => this.ngOnInit()
    })
  }

}
