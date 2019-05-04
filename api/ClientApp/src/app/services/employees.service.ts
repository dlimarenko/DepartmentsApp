import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

import { EmployeeItem } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  
  private url = 'api/employees';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public getEmployees(depId){
    //return of([])
    //return this.http.get('api / departments /' + id + '/employees');
    return this.http.get(this.url + '/' + depId);
  }

  public addNewEmp(depId, newEmployee) {
    return this.http.post(this.url + "/" + depId, newEmployee, this.httpOptions);
  }

  public deleteEmp(empId) {
    return this.http.delete(this.url + '/' + empId);
  }

  public editEmp(updatedEmp) {
    return this.http.put(this.url, updatedEmp);
  }
}
