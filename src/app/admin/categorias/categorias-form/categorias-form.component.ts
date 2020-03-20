import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriasService } from '../categorias.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.scss']
})
export class CategoriasFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: CategoriasService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const categoria = this.route.snapshot.data['categoria'];
    console.log(categoria);
    this.form = this.fb.group({
      id: [categoria.id],
      descricao: [categoria.descricao, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {

    this.submitted = true;
    console.log(this.form.value);

    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = 'Categoria criada com sucesso!';
      let msgError = 'Erro ao criar categoria, tente novamente!';

      if (this.form.value.id) {
        msgSuccess = 'Categoria atualizada com sucesso!';
        msgError = 'Erro ao atualizar categoria, tente novamente!';
      }

      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError),
      );
    }

  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
