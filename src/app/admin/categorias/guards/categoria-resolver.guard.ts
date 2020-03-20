import { CategoriasService } from '../categorias.service';
import { Categoria } from '../categoria';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaResolverGuard implements Resolve<Categoria> {

  constructor(private service: CategoriasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Categoria> {

    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      descricao: null
    });
  }

}
