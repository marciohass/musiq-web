import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjudasRoutingModule } from './ajudas-routing.module';
import { AjudasListaComponent } from './ajudas-lista/ajudas-lista.component';
import { AjudasFormComponent } from './ajudas-form/ajudas-form.component';


@NgModule({
  declarations: [AjudasListaComponent, AjudasFormComponent],
  imports: [
    CommonModule,
    AjudasRoutingModule,
    ReactiveFormsModule
  ]
})
export class AjudasModule { }
