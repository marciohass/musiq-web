import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../implementClass/employee';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ITematic } from '../implementClass/tematic';
import { IJobCategory } from '../implementClass/jobcategory';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "assets/data/employee.json";
  private _urlTematic: string = "assets/data/tematic.json";
  private _urlJobCategory: string = "assets/data/jobcategory.json";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
      .pipe(retry(1),catchError(this.errorHandler)
      );
  }
  getTematic(): Observable<ITematic[]> {
    return this.http.get<ITematic[]>(this._urlTematic)
      .pipe(catchError(this.errorHandler));
  }

  getJobCategory(): Observable<IJobCategory[]> {
    return this.http.get<IJobCategory[]>(this._urlJobCategory)
      .pipe(retry(1), catchError(this.errorHandler));
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
