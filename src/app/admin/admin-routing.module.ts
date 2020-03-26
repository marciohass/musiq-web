import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard1',
    pathMatch: 'full'
  },
  { path: 'admin',
    loadChildren: () => import('./admin.module').then(m => m.AdminModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard1/dashboard1.module').then(m => m.Dashboard1Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
