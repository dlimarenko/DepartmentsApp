import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, concat } from 'rxjs';

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
    return this.http.get(this.url + '/' + depId);
  }

  public getAllEmployees() {
    return this.http.get(this.url);
  }

  public addNewEmp(depId, newEmployee) {
    console.log(newEmployee);
    return this.http.post(this.url + "/" + depId, newEmployee);
  }

  public deleteEmp(empId) {
    return this.http.delete(this.url + '/' + empId);
  }

  public editEmp(updatedEmp) {
    return this.http.put(this.url, updatedEmp);
  }
}
