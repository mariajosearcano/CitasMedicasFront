import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cita } from "../Models/Cita";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CitaService {

    private url = "http://localhost:8080/app/cita";
    private urlReporteXML = "http://localhost:8080/app/xml";
    private urlSave = "http://localhost:8080/app/cita/save";
    private urlUpdate = "http://localhost:8080/app/updateCita";
    private urlDelete = "http://localhost:8080/app/deleteCita";
    //private apiUrl = "";

    constructor(private http: HttpClient) {

    }
    /*getCita(id: String) {
        return this.http.get<Cita>(`${this.url}/${id}`)
    }*/
    getCitas(): Observable<Cita[]> {
        let lista = this.http.get<Cita[]>(this.url);
        return lista;
    }
    addCita(cita: Cita): Observable<Object> {
        return this.http.post(this.urlSave, cita);
    }
    editCita(idCita: number, cita: Cita): Observable<Object> {
        return this.http.put(`${this.urlUpdate}/${idCita}`, cita);
    }
    deleteCita(id: number): Observable<Object> {
        return this.http.delete(`${this.urlDelete}/${id}`);
    }

    getCitasPage(page: number, size: number): Observable<any> {
        let params = new HttpParams()
            .set('page', page)
            .set('size', size);
        return this.http.get<any>(this.url, { params });
    }
    descargarReporte(): Observable<string> {
        return this.http.get(this.urlReporteXML, { responseType: 'text' });
    }

    getCitaById(idCita: number): Observable<Cita> {
        return this.http.get<Cita>(`${this.url}/${idCita}`);
    }

}
