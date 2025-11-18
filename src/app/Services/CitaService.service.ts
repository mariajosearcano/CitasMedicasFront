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
   * @param page Número de página (default: 0)
   * @param size Tamaño de página (default: 10)
   */
  obtenerListaCitas(page: number = 0, size: number = 10): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    
    return this.httpClient.get(`${this.baseURL}`, { params });
  }

  /**
   * Registra una nueva cita
   * @param cita Objeto cita a crear
   */
  registrarCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(`${this.baseURL}/save`, cita);
  }

  /**
   * Actualiza una cita existente
   * @param id ID de la cita a actualizar
   * @param cita Objeto cita con los nuevos datos
   */
  actualizarCita(id: number, cita: Cita): Observable<Cita> {
    return this.httpClient.put<Cita>(`${environment.apiUrl}/updateCita/${id}`, cita);
  }

  /**
   * Obtiene una cita por su ID
   * @param id ID de la cita
   */
  obtenerCitaPorId(id: number): Observable<Cita> {
    return this.httpClient.get<Cita>(`${this.baseURL}/${id}`);
  }

  /**
   * Elimina una cita por su ID
   * @param id ID de la cita a eliminar
   */
  eliminarCita(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/deleteCita/${id}`);
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