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

  // ==================== MÉTODOS DE LISTADO ====================
  
  obtenerTodosMedicos(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.medicosURL);
  }

  getMedicos(): Observable<Medico[]> {
    return this.obtenerTodosMedicos();
  }

  getMedicosPage(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  obtenerListaMedicos(page: number = 0, size: number = 10): Observable<any> {
    return this.getMedicosPage(page, size);
  }

  // ==================== MÉTODOS DE OBTENER POR ID ====================
  
  obtenerMedicoPorId(id: number): Observable<Medico> {
    return this.httpClient.get<Medico>(`${environment.apiUrl}/getMedicoById/${id}`);
  }

  getMedicoById(id: number): Observable<Medico> {
    return this.obtenerMedicoPorId(id);
  }

  // ==================== MÉTODOS DE CREAR ====================
  
  registrarMedico(medico: Medico): Observable<Medico> {
    return this.httpClient.post<Medico>(`${environment.apiUrl}/saveMedico`, medico);
  }

  addMedico(medico: Medico): Observable<Medico> {
    return this.registrarMedico(medico);
  }

  saveMedico(medico: Medico): Observable<Medico> {
    return this.registrarMedico(medico);
  }

  // ==================== MÉTODOS DE ACTUALIZAR ====================
  
  actualizarMedico(id: number, medico: Medico): Observable<Medico> {
    return this.httpClient.put<Medico>(`${environment.apiUrl}/editarMedico/${id}`, medico);
  }

  updateMedico(id: number, medico: Medico): Observable<Medico> {
    return this.actualizarMedico(id, medico);
  }

  editMedico(id: number, medico: Medico): Observable<Medico> {
    return this.actualizarMedico(id, medico);
  }

  // ==================== MÉTODOS DE ELIMINAR ====================
  
  eliminarMedico(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deleteMedico/${id}`);
  }

  deleteMedico(id: number): Observable<any> {
    return this.eliminarMedico(id);
  }
}