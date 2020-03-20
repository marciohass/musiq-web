import { Router, ActivatedRoute } from '@angular/router';
import { AlertModalService } from './../../../shared/alert-modal.service';
import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { Observable, empty, EMPTY } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.scss'],
  preserveWhitespaces: true
})
export class CategoriasListaComponent implements OnInit {

  categorias$: Observable<Categoria[]>;
  categoriaSelecionada: Categoria;

  constructor(
    private service: CategoriasService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.categorias$ = this.service.list()
    .pipe(
      catchError(
        error => {
          console.error(error);
          this.handleError();
          return empty();
        })
    );
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(categoria) {
    this.categoriaSelecionada = categoria;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa categoria?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(categoria.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover categoria. Tente novamente mais tarde.');
      }
    );
  }

}
