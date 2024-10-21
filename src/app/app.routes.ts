import { Routes } from '@angular/router';
import { IndicadorListComponent } from './indicador-list/indicador-list.component';
import { IndicadorFormComponent } from './indicador-form/indicador-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedicionesListComponent } from './mediciones-list/mediciones-list.component';
import { FormMedicionesComponent } from './form-mediciones/form-mediciones.component';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./navbar/navbar.component').then(m => NavbarComponent)
    }, 
    {
        path: 'indicadores',
        loadComponent: () => import('./indicador-list/indicador-list.component').then(m => IndicadorListComponent)
    },
    {
        path: 'new',
        loadComponent: () => import('./indicador-form/indicador-form.component').then(m => IndicadorFormComponent)
    },
    {
        path: ':id/edit',
        loadComponent: () => import('./indicador-form/indicador-form.component').then(m => IndicadorFormComponent)
    },
    {
        path: 'mediciones',
        loadComponent: () => import('./mediciones-list/mediciones-list.component').then(m => MedicionesListComponent)
    },
    {
        path: 'new/medicion',
        loadComponent: () => import('./form-mediciones/form-mediciones.component').then(m => FormMedicionesComponent)
    },
    {
        path: 'mediciones/:id/edit',
        loadComponent: () => import('./form-mediciones/form-mediciones.component').then(m => FormMedicionesComponent)
    }
];
