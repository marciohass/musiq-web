import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private Http: HttpClient) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credencials: {email: string, password: string}): Observable<boolean> {
    return this.Http.post<any>(`${environment.API}auth/login`, credencials)
    .pipe(
      tap(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
      })
    );
  }
}
