import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MedicionService } from '../service/medicion.service';
import { medicion } from '../model/medicion';

@Component({
  selector: 'app-mediciones-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './mediciones-list.component.html',
  styleUrls: ['./mediciones-list.component.css'] // Cambia styleUrl a styleUrls
})
export class MedicionesListComponent implements OnInit { // Implementa OnInit

  private medicionService = inject(MedicionService);

  mediciones: medicion[] = []; // Cambié 'medicion' a 'mediciones'

  ngOnInit(): void {
    this.obtenertodo();
  }

  obtenertodo() {
    this.medicionService.list().subscribe(
      (mediciones) => {
        this.mediciones = mediciones; // Asegúrate de que 'mediciones' es el array esperado
        console.log(mediciones); // Esto te ayudará a verificar los datos
      },
      (error) => {
        console.error('Error al obtener las mediciones:', error); // Manejo de errores
      }
    );
  }

  deleteMedicion(data: medicion) {
    this.medicionService.delete(data.id).subscribe(
      () => {
        this.obtenertodo(); // Recarga las mediciones después de eliminar
      },
      (error) => {
        console.error('Error al eliminar la medición:', error); // Manejo de errores
      }
    );
  }
}
