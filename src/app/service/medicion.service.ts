import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { medicion } from '../model/medicion'; // Cambiar el nombre del modelo a MedicionModel si lo prefieres

@Injectable({
  providedIn: 'root'
})
export class MedicionService {

  private http = inject(HttpClient);
  
  // Obtener todas las mediciones
  list(): Observable<medicion[]> {
    return this.http.get<medicion[]>('http://localhost:8080/mediciones/get');
  }
  
  // Obtener una medición por su ID
  get(id: number): Observable<medicion> {
    return this.http.get<medicion>(`http://localhost:8080/mediciones/${id}`);
  }
  
  // Crear una nueva medición
  create(data: medicion): Observable<medicion> {
    return this.http.post<medicion>('http://localhost:8080/mediciones/create', data);
  }
  
  // Actualizar una medición por su ID
  update(id: number, data: medicion): Observable<medicion> {
    return this.http.put<medicion>(`http://localhost:8080/mediciones/update/${id}`, data);
  }
  
  // Eliminar una medición por su ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/mediciones/${id}`);
  }
}
