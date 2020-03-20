import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    HeaderComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
