import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { DepartmentPage } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  private url = 'api/departments';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public getDepartments(paginatorObject?): Observable<DepartmentPage> {
    return this.http.get<DepartmentPage>(this.url, { params: paginatorObject ? paginatorObject : {} });
  }

  public addNewDep(name) {
    const obj = { name };
    return this.http.post(this.url, obj, this.httpOptions);
  }

  public deleteDep(id) {
    return this.http.delete(this.url + '/' + id);
  }

  public editDep(id, newName) {
    return this.http.put(this.url + '/' + id, { id, name: newName });
  } 
}
