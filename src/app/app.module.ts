import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { HeaderComponent } from './admin/header/header.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Dashboard1Module } from './admin/dashboard1/dashboard1.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule,
    AuthModule,
    Dashboard1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
