import { AjudaResolverGuard } from './guards/ajuda-resolver.guard';
import { AjudasFormComponent } from './ajudas-form/ajudas-form.component';
import { AjudasListaComponent } from './ajudas-lista/ajudas-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: AjudasListaComponent },
  {
    path: 'novo', component: AjudasFormComponent,
    resolve: {
      ajuda: AjudaResolverGuard
    }
  },
  {
    path: 'editar/:id', component: AjudasFormComponent,
    resolve: {
      ajuda: AjudaResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjudasRoutingModule { }
