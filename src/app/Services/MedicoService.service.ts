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
   * Obtiene todos los médicos sin paginación
   */
  obtenerTodosMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.medicosURL);
  }

  /**
   * Obtiene la lista paginada de médicos
   */
  getMedicosPage(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  /**
   * Alias para compatibilidad
   */
  obtenerListaMedicos(page: number = 0, size: number = 10): Observable<any> {
    return this.getMedicosPage(page, size);
  }

  /**
   * Obtiene un médico por su ID
   */
  obtenerMedicoPorId(id: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${environment.apiUrl}/getMedicoById/${id}`);
  }

  /**
   * Alias para compatibilidad
   */
  getMedicoById(id: number): Observable<Medico> {
    return this.obtenerMedicoPorId(id);
  }

  /**
   * Registra un nuevo médico
   */
  registrarMedico(medico: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(`${environment.apiUrl}/saveMedico`, medico);
  }

  /**
   * Alias para compatibilidad
   */
  addMedico(medico: Medico): Observable<Medico> {
    return this.registrarMedico(medico);
  }

  /**
   * Alias para compatibilidad
   */
  saveMedico(medico: Medico): Observable<Medico> {
    return this.registrarMedico(medico);
  }

  /**
   * Actualiza un médico existente
   */
  actualizarMedico(id: number, medico: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(`${environment.apiUrl}/editarMedico/${id}`, medico);
  }

  /**
   * Alias para compatibilidad
   */
  updateMedico(id: number, medico: Medico): Observable<Medico> {
    return this.actualizarMedico(id, medico);
  }

  /**
   * Elimina un médico por su ID
   */
  eliminarMedico(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deleteMedico/${id}`);
  }

  /**
   * Alias para compatibilidad
   */
  deleteMedico(id: number): Observable<any> {
    return this.eliminarMedico(id);
  }
}