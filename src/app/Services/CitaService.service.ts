import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../Models/Cita';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private baseURL = `${environment.apiUrl}/cita`;
  private xmlURL = `${environment.apiUrl}/xml`;

  constructor(private httpClient: HttpClient) { }

  // ==================== MÉTODOS DE LISTADO ====================
  
  getCitasPage(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  obtenerListaCitas(page: number = 0, size: number = 10): Observable<any> {
    return this.getCitasPage(page, size);
  }

  // ==================== MÉTODOS DE OBTENER POR ID ====================
  
  obtenerCitaPorId(id: number): Observable<Cita> {
    return this.httpClient.get<Cita>(`${this.baseURL}/${id}`);
  }

  getCitaById(id: number): Observable<Cita> {
    return this.obtenerCitaPorId(id);
  }

  // ==================== MÉTODOS DE CREAR ====================
  
  registrarCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(`${this.baseURL}/save`, cita);
  }

  addCita(cita: Cita): Observable<Cita> {
    return this.registrarCita(cita);
  }

  saveCita(cita: Cita): Observable<Cita> {
    return this.registrarCita(cita);
  }

  // ==================== MÉTODOS DE ACTUALIZAR ====================
  
  actualizarCita(id: number, cita: Cita): Observable<Cita> {
    return this.httpClient.put<Cita>(`${environment.apiUrl}/updateCita/${id}`, cita);
  }

  updateCita(id: number, cita: Cita): Observable<Cita> {
    return this.actualizarCita(id, cita);
  }

  editCita(id: number, cita: Cita): Observable<Cita> {
    return this.actualizarCita(id, cita);
  }

  // ==================== MÉTODOS DE ELIMINAR ====================
  
  eliminarCita(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deleteCita/${id}`);
  }

  deleteCita(id: number): Observable<any> {
    return this.eliminarCita(id);
  }

  // ==================== MÉTODOS DE REPORTES ====================
  
  descargarReporteXML(): Observable<Blob> {
    return this.httpClient.get(this.xmlURL, {
      responseType: 'blob'
    });
  }

  descargarReporte(): Observable<string> {
    return this.httpClient.get(this.xmlURL, {
      responseType: 'text'
    });
  }

  obtenerReporteXMLTexto(): Observable<string> {
    return this.httpClient.get(this.xmlURL, {
      responseType: 'text'
    });
  }
}