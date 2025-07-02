import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = `${environment.apiUrl}/employees`;

  constructor(private http: HttpClient) { }

  //Get an employee by ID
  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl+"/get/"}${id}`);
  }

  // Get an employee by email
  getEmployeeByEmail(email: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl+"/getByEmail/"}${email}`);
  }

  // Get all employees
  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl+"/getAll");
  }

  // Delete a employee by email
  deleteEmployeeByEmail(email: string): Observable<void> {
    if (!email) {
      throw new Error('Email is required to delete an employee.');
    }
    return this.http.delete<void>(`${this.apiUrl}/deleteByEmail/${email}`);
  }
}
