import { Ajuda } from './../ajuda';
import { AjudasService } from '../ajudas.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AjudaResolverGuard implements Resolve<Ajuda> {

  constructor(private service: AjudasService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ajuda> {

    if (route.params && route.params['id']) {
      return this.service.loadByID(route.params['id']);
    }

    return of({
      id: null,
      titulo: null,
      descricao: null
    });
  }

}
