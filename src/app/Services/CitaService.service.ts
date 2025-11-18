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

  /**
   * Obtiene la lista paginada de citas
   */
  getCitasPage(page: number, size: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  /**
   * Alias para compatibilidad
   */
  obtenerListaCitas(page: number = 0, size: number = 10): Observable<any> {
    return this.getCitasPage(page, size);
  }

  /**
   * Obtiene una cita por su ID
   */
  obtenerCitaPorId(id: number): Observable<Cita> {
    return this.httpClient.get<Cita>(`${this.baseURL}/${id}`);
  }

  /**
   * Alias para compatibilidad
   */
  getCitaById(id: number): Observable<Cita> {
    return this.obtenerCitaPorId(id);
  }

  /**
   * Registra una nueva cita
   */
  registrarCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(`${this.baseURL}/save`, cita);
  }

  /**
   * Alias para compatibilidad
   */
  addCita(cita: Cita): Observable<Cita> {
    return this.registrarCita(cita);
  }

  /**
   * Alias para compatibilidad
   */
  saveCita(cita: Cita): Observable<Cita> {
    return this.registrarCita(cita);
  }

  /**
   * Actualiza una cita existente
   */
  actualizarCita(id: number, cita: Cita): Observable<Cita> {
    return this.httpClient.put<Cita>(`${environment.apiUrl}/updateCita/${id}`, cita);
  }

  /**
   * Alias para compatibilidad
   */
  updateCita(id: number, cita: Cita): Observable<Cita> {
    return this.actualizarCita(id, cita);
  }

  /**
   * Elimina una cita por su ID
   */
  eliminarCita(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deleteCita/${id}`);
  }

  /**
   * Alias para compatibilidad
   */
  deleteCita(id: number): Observable<any> {
    return this.eliminarCita(id);
  }

  /**
   * Descarga el reporte XML de todas las citas
   */
  descargarReporteXML(): Observable<Blob> {
    return this.httpClient.get(this.xmlURL, {
      responseType: 'blob'
    });
  }

  /**
   * Obtiene el XML como texto
   */
  obtenerReporteXMLTexto(): Observable<string> {
    return this.httpClient.get(this.xmlURL, {
      responseType: 'text'
    });
  }
}