import { HttpClient } from '@angular/common/http';
import { Ajuda } from './ajuda';
import { CrudService } from '../../shared/crud-service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AjudasService extends CrudService<Ajuda> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}ajudas`);
  }
}
