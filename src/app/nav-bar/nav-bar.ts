import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {


  constructor(private router : Router) {}

  menuAbierto = false;
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  goToPacientes(){
    this.router.navigate(['paciente-listar']);
  }
  goToCitas(){
    this.router.navigate(['cita-listar']);
  }
  goToMedicos(){
    this.router.navigate(['medico-listar']);
  }
}
