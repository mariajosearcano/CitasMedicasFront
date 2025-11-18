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

  /**
   * Obtiene todos los pacientes sin paginación
   */
  obtenerTodosPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacientesURL);
  }

  /**
   * Obtiene la lista paginada de pacientes
   * @param page Número de página
   * @param size Tamaño de página
   */
  getPacientesPage(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  /**
   * Alias para compatibilidad
   */
  obtenerListaPacientes(page: number = 0, size: number = 10): Observable<any> {
    return this.getPacientesPage(page, size);
  }

  /**
   * Obtiene un paciente por su ID
   * @param id ID del paciente
   */
  obtenerPacientePorId(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.baseURL}/${id}`);
  }

  /**
   * Alias para compatibilidad
   */
  getPacienteById(id: number): Observable<Paciente> {
    return this.obtenerPacientePorId(id);
  }

  /**
   * Registra un nuevo paciente
   * @param paciente Objeto paciente a crear
   */
  registrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(`${environment.apiUrl}/savePaciente`, paciente);
  }

  /**
   * Alias para compatibilidad
   */
  addPaciente(paciente: Paciente): Observable<Paciente> {
    return this.registrarPaciente(paciente);
  }

  /**
   * Alias para compatibilidad
   */
  savePaciente(paciente: Paciente): Observable<Paciente> {
    return this.registrarPaciente(paciente);
  }

  /**
   * Actualiza un paciente existente
   * @param id ID del paciente a actualizar
   * @param paciente Objeto paciente con los nuevos datos
   */
  actualizarPaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(`${environment.apiUrl}/editarPaciente/${id}`, paciente);
  }

  /**
   * Alias para compatibilidad
   */
  updatePaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.actualizarPaciente(id, paciente);
  }

  /**
   * Elimina un paciente por su ID
   * @param id ID del paciente a eliminar
   */
  eliminarPaciente(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deletePaciente/${id}`);
  }

  /**
   * Alias para compatibilidad
   */
  deletePaciente(id: number): Observable<any> {
    return this.eliminarPaciente(id);
  }

  /**
   * Calcula la edad del paciente
   */
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