import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from '../../../shared/alert-modal.service';
import { AjudasService } from './../ajudas.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ajudas-form',
  templateUrl: './ajudas-form.component.html',
  styleUrls: ['./ajudas-form.component.scss']
})
export class AjudasFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: AjudasService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const ajuda = this.route.snapshot.data['ajuda'];
    console.log(ajuda);
    this.form = this.fb.group({
      id: [ajuda.id],
      titulo: [ajuda.titulo, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      descricao: [ajuda.descricao, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
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

      let msgSuccess = 'Ajuda criada com sucesso!';
      let msgError = 'Erro ao criar ajuda, tente novamente!';

      if (this.form.value.id) {
        msgSuccess = 'Ajuda atualizada com sucesso!';
        msgError = 'Erro ao atualizar ajuda, tente novamente!';
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
