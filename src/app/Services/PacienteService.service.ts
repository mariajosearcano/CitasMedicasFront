import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../Models/Paciente';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseURL = `${environment.apiUrl}/paciente`;
  private pacientesURL = `${environment.apiUrl}/pacientes`;

  constructor(private httpClient: HttpClient) { }

  // ==================== MÉTODOS DE LISTADO ====================
  
  obtenerTodosPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacientesURL);
  }

  getPacientesPage(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  obtenerListaPacientes(page: number = 0, size: number = 10): Observable<any> {
    return this.getPacientesPage(page, size);
  }

  // ==================== MÉTODOS DE OBTENER POR ID ====================
  
  obtenerPacientePorId(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.baseURL}/${id}`);
  }

  getPacienteById(id: number): Observable<Paciente> {
    return this.obtenerPacientePorId(id);
  }

  // ==================== MÉTODOS DE CREAR ====================
  
  registrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(`${environment.apiUrl}/savePaciente`, paciente);
  }

  addPaciente(paciente: Paciente): Observable<Paciente> {
    return this.registrarPaciente(paciente);
  }

  savePaciente(paciente: Paciente): Observable<Paciente> {
    return this.registrarPaciente(paciente);
  }

  // ==================== MÉTODOS DE ACTUALIZAR ====================
  
  actualizarPaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(`${environment.apiUrl}/editarPaciente/${id}`, paciente);
  }

  updatePaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.actualizarPaciente(id, paciente);
  }

  editPaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.actualizarPaciente(id, paciente);
  }

  // ==================== MÉTODOS DE ELIMINAR ====================
  
  eliminarPaciente(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deletePaciente/${id}`);
  }

  deletePaciente(id: number): Observable<any> {
    return this.eliminarPaciente(id);
  }

  // ==================== MÉTODOS AUXILIARES ====================
  
  calcularEdad(fechaNacimiento: Date | string): number {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    
    return edad;
  }
}