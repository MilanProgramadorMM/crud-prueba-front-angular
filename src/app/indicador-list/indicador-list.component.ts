import { Component, inject, OnInit } from '@angular/core';
import { IndicadorService } from '../service/indicator.service';
import { indicador } from '../model/Indicador';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-indicador-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './indicador-list.component.html',
  styleUrl: './indicador-list.component.css'
})
export class IndicadorListComponent implements OnInit{

  private indicadorService = inject(IndicadorService);

  indicador : indicador[] = [];


  ngOnInit(): void {
    this.obtenertodo();
  }
  
  obtenertodo() {
    this.indicadorService.list()
      .subscribe(indicadores => {
        this.indicador = indicadores;
      });
  }
  
  deleteIndicador(data: indicador) {
    this.indicadorService.delete(data.id)
      .subscribe(() => {
        this.obtenertodo();
      });
  }

}

