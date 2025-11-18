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
   * Obtiene la lista paginada de pacientes
   * @param page Número de página (default: 0)
   * @param size Tamaño de página (default: 10)
   */
  obtenerListaPacientes(page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  /**
   * Obtiene todos los pacientes sin paginación
   * Útil para llenar select/dropdown
   */
  obtenerTodosPacientes(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.pacientesURL);
  }

  /**
   * Registra un nuevo paciente
   * @param paciente Objeto paciente a crear
   */
  registrarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(`${environment.apiUrl}/savePaciente`, paciente);
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
   * Obtiene un paciente por su ID
   * @param id ID del paciente
   */
  obtenerPacientePorId(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(`${this.baseURL}/${id}`);
  }

  /**
   * Elimina un paciente por su ID
   * También elimina las citas asociadas automáticamente
   * @param id ID del paciente a eliminar
   */
  eliminarPaciente(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deletePaciente/${id}`);
  }

  /**
   * Busca pacientes por email
   * @param email Email a buscar
   */
  buscarPorEmail(email: string): Observable<Paciente> {
    // Si necesitas implementar este endpoint en el backend
    return this.httpClient.get<Paciente>(`${this.baseURL}/email/${email}`);
  }

  /**
   * Calcula la edad del paciente basada en su fecha de nacimiento
   * @param fechaNacimiento Fecha de nacimiento del paciente
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