import { Ajuda } from './../ajuda';
import { Observable, empty, EMPTY } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AjudasService } from '../ajudas.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, take, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ajudas-lista',
  templateUrl: './ajudas-lista.component.html',
  styleUrls: ['./ajudas-lista.component.scss'],
  preserveWhitespaces: true
})
export class AjudasListaComponent implements OnInit {

  ajudas$: Observable<Ajuda[]>;
  ajudaSelecionada: Ajuda;

  constructor(
    private service: AjudasService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.ajudas$ = this.service.list()
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
    this.alertService.showAlertDanger('Erro ao carregar ajuda. Tente novamente mais tarde.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  onDelete(ajuda) {
    this.ajudaSelecionada = ajuda;

    const result$ = this.alertService.showConfirm('Confirmação', 'Tem certeza que deseja remover essa ajuda?');
    result$.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.service.remove(ajuda.id) : EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover ajuda. Tente novamente mais tarde.');
      }
    );
  }

}
