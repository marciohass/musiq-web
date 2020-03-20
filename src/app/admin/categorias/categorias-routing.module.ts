import { CategoriasFormComponent } from './categorias-form/categorias-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasListaComponent } from './categorias-lista/categorias-lista.component';
import { CategoriaResolverGuard } from './guards/categoria-resolver.guard';


const routes: Routes = [
  { path: '', component: CategoriasListaComponent },
  {
    path: 'novo', component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    }
  },
  {
    path: 'editar/:id', component: CategoriasFormComponent,
    resolve: {
      categoria: CategoriaResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
