import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IndicadorService } from '../service/indicator.service';
import { indicador } from '../model/Indicador';


@Component({
  selector: 'app-indicador-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './indicador-form.component.html',
  styleUrl: './indicador-form.component.css'
})
export class IndicadorFormComponent implements OnInit {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private activateRoute = inject(ActivatedRoute)

  private indicadorService = inject(IndicadorService);

  form?: FormGroup;
  indicador?: indicador;

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    console.log(id)

    if (id) {
      this.indicadorService.get(parseInt(id)).subscribe(data => {
        this.indicador = data;
        this.form = this.fb.group({
          nombre: [data.nombre, [Validators.required]],
          valorMinimo: [data.valorMinimo, [Validators.required, Validators.min(0)]],
          valorEsperado: [data.valorEsperado, [Validators.required, Validators.min(0)]],
          valorMaximo: [data.valorMaximo, [Validators.required, Validators.min(0)]],
        })
      })
    } else {
      this.form = this.fb.group({
        nombre: ['', [Validators.required]],
        valorMinimo: ['', [Validators.required, Validators.min(0)]],
        valorEsperado: ['', [Validators.required, Validators.min(0)]],
        valorMaximo: ['', [Validators.required, Validators.min(0)]],
      });
    }

  }
  create() {
    const data = this.form!.value

  if (!this.form?.valid) {
    alert('Por favor, completa todos los campos obligatorios.');
    return; 
  }
    if (this.indicador) {
      this.indicadorService.update(this.indicador.id, data)
        .subscribe(() => {
          this.router.navigate(['/indicadores']);
        })
    } else {
      this.indicadorService.create(data)
        .subscribe(() => {
          this.router.navigate(['/indicadores']);
        })
    }

  }

}
