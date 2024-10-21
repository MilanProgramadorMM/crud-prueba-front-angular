import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { indicador} from '../model/Indicador'; // Cambiar el nombre del modelo a IndicadorModel

@Injectable({
  providedIn: 'root'
})
export class IndicadorService {

private http = inject(HttpClient);

  list() {
    return this.http.get<indicador[]>('http://localhost:8080/indicadores/get');
  }
  
  get(id: number) {
    return this.http.get<indicador>(`http://localhost:8080/indicadores/${id}`);
  }
  
  create (data: indicador) {
    return this.http.post<indicador>('http://localhost:8080/indicadores/create', data);
  }
  
  update (id: number, data: indicador) {
    return this.http.put<indicador>(`http://localhost:8080/indicadores/update/${id}`, data);
  }
  
  delete(id: number) {
    return this.http.delete(`http://localhost:8080/indicadores/${id}`);
  }
}
