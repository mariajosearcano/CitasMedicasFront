import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../Models/Medico';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private baseURL = `${environment.apiUrl}/medico`;
  private medicosURL = `${environment.apiUrl}/medicos`;

  constructor(private httpClient: HttpClient) { }

  /**
   * Obtiene la lista paginada de médicos
   * @param page Número de página (default: 0)
   * @param size Tamaño de página (default: 10)
   */
  obtenerListaMedicos(page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  /**
   * Obtiene todos los médicos sin paginación
   * Útil para llenar select/dropdown
   */
  obtenerTodosMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.medicosURL);
  }

  /**
   * Registra un nuevo médico
   * @param medico Objeto médico a crear
   */
  registrarMedico(medico: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(`${environment.apiUrl}/saveMedico`, medico);
  }

  /**
   * Actualiza un médico existente
   * @param id ID del médico a actualizar
   * @param medico Objeto médico con los nuevos datos
   */
  actualizarMedico(id: number, medico: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(`${environment.apiUrl}/editarMedico/${id}`, medico);
  }

  /**
   * Obtiene un médico por su ID
   * @param id ID del médico
   */
  obtenerMedicoPorId(id: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${environment.apiUrl}/getMedicoById/${id}`);
  }

  /**
   * Elimina un médico por su ID
   * También elimina las citas asociadas automáticamente
   * @param id ID del médico a eliminar
   */
  eliminarMedico(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deleteMedico/${id}`);
  }

  /**
   * Busca médicos por especialidad
   * @param especialidad Especialidad a buscar
   */
  buscarPorEspecialidad(especialidad: string): Observable<Medico[]> {
    // Si necesitas implementar este endpoint en el backend
    return this.httpClient.get<Medico[]>(`${this.baseURL}/especialidad/${especialidad}`);
  }
}