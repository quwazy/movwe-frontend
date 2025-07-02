import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavBar } from "../nav-bar/nav-bar";
import { EmployeeService } from '../services/employee-service';
import { Employee } from '../models/employee.interface';

@Component({
  selector: 'app-employee-view',
  imports: [CommonModule, NavBar, FormsModule],
  templateUrl: './employee-view.html',
  styleUrl: './employee-view.css'
})
export class EmployeeView implements OnInit {
  protected selectedEmployee: Employee | null = null;
  protected employeeList: Array<Employee> = [];

  searchId: number | null = null;
  searchEmail: string | null = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadEmployees();
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  onSearchById(): void {
    if (this.searchId != null) {
      this.searchEmployeeById(this.searchId);
      this.searchId = null;
    }
  }

  onSearchByEmail(): void {
    if (this.searchEmail != null) {
      this.searchEmployeeByEmail(this.searchEmail);
      this.searchEmail = "";
    }
  }

  confirmDelete(): void {
    const confirmed = confirm('Are you sure you want to delete this employee?');
    if (confirmed && this.selectedEmployee) {
      this.deleteEmployeeByEmail(this.selectedEmployee.email);
    }
  }

  private loadEmployees() {
    this.employeeService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employeeList = employees;
      },
      error: (err) => console.error('Error loading employees:', err)
    });
  }

  private searchEmployeeById(id: number): void {
    this.employeeService.getEmployeeById(id).subscribe({
      next: (employee) => {
        this.selectedEmployee = employee;
      },
      error: (err) => console.error('Error searching employee by ID:', err)
    });
  }

  private searchEmployeeByEmail(email: string): void {
    this.employeeService.getEmployeeByEmail(email).subscribe({
      next: (employee) => {
        this.selectedEmployee = employee;
      },
      error: (err) => console.error('Error searching employee by email:', err)
    });
  }

  private deleteEmployeeByEmail(email: string): void {
    this.employeeService.deleteEmployeeByEmail(email).subscribe({
      next: () => {
        alert('Employee deleted successfully.');
        this.loadEmployees();
        this.selectedEmployee = null;
      },
      error: (err) => console.error('Error deleting employee:', err)
    });
  }
}
