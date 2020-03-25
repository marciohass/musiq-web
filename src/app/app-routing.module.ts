import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'admin'
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'ajuda',
    loadChildren: () => import('./admin/ajudas/ajudas.module').then(m => m.AjudasModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./admin/dashboard1/dashboard1.component').then(m => m.AdminDashboard1Component)
  },
  /*
  {
    path: 'employees',
    loadChildren: () => import('./admin/employee-list/categorias.module').then(m => m.CategoriasModule)
  },
  {path: 'employees', component: EmployeeListComponent},
  {path: 'dashboard', component: AdminDashboard1Component},
  {path: 'tematic', component: TematicComponent},
  {path: 'jobCategory', component: JobCategoryComponent},
  {path: '**', component: PageNotFoundComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
