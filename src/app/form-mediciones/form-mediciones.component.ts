import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MedicionService } from '../service/medicion.service';
import { medicion } from '../model/medicion';
import { indicador } from '../model/Indicador';
import { IndicadorService } from '../service/indicator.service';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-form-mediciones',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './form-mediciones.component.html',
  styleUrl: './form-mediciones.component.css'
})
export class FormMedicionesComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private activateRoute = inject(ActivatedRoute)
  indicadores: indicador[] = []; // Array para guardar los indicadores


  private medicionservice = inject(MedicionService);
  private indicadorService = inject(IndicadorService); // Inyecta el servicio de indicadores


  form?: FormGroup;
  medicion?: medicion;

  ngOnInit(): void {
    this.indicadorService.list().subscribe(data => {
      console.log(data); // Agrega esto para verificar los datos
      this.indicadores = data;    });

    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id)

    if (id) {
      this.medicionservice.get(parseInt(id)).subscribe(data => {
        this.medicion = data;
        this.form = this.fb.group({
          indicadorId: [data.indicadorId, [Validators.required]],
          fecha: [data.fecha, [Validators.required]],
          valorMedido: [data.valorMedido, [Validators.required, Validators.min(0)]], // Cambiado aquí
          descripcion: [data.descripcion, [Validators.required]],
        })
      })
    } else {
      this.form = this.fb.group({
        indicadorId: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
        valorMedido: ['', [Validators.required, Validators.min(0)]],
        descripcion: ['', [Validators.required]],
      });
    }

  }
  create() {
    const data = this.form!.value
    if (!this.form?.valid) {
      alert('Por favor, completa todos los campos obligatorios.');
      return; 
    }
    if (this.medicion) {
      this.medicionservice.update(this.medicion.id, data)
        .subscribe(() => {
          this.router.navigate(['/mediciones']);
        })
    } else {
      this.medicionservice.create(data)
        .subscribe(() => {
          this.router.navigate(['/mediciones']);
        })
    }

  }

}
