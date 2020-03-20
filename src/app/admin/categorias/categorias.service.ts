import { HttpClient } from '@angular/common/http';
import { CrudService } from './../../shared/crud-service';
import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService extends CrudService<Categoria> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}categorias`);
  }
}
