import { Categoria } from './../admin/categorias/categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get<Categoria[]>('');
  }
}
