import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EditEmployeeService } from "./edit-employee.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-edit-employee',
    templateUrl: './edit-employee.component.html',
    styleUrls: ['./edit-employee.component.css']
  })
  export class EmployeeEditComponent implements OnInit {
    employeeId: any;
  employee: any;
  employeeForm!: FormGroup;
  showSuccessMessage = false;
  


  constructor(private route:ActivatedRoute,private editService:EditEmployeeService, private formBuilder: FormBuilder,private snackbar:MatSnackBar) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get('id');
       this.initForm();
      this.fetchEmployeeDetails(this.employeeId);
      
    });
  }
  initForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      gender: [null],
      email:['',Validators.required],
      phoneNumber:['',Validators.required],
      role:['',Validators.required]
    });
  }
  fetchEmployeeDetails(id: any) {
    // Assuming you have a service to fetch employee details by ID
    // Replace this with your actual service method call
    this.editService.getEmployeeById(id).subscribe(data => {
        this.employeeForm.patchValue(data); 
    // Patch employee data to form
      });
      // Add more properties as needed
    };
    saveEmployee() {
        if (this.employeeForm.valid) {
          const updatedEmployeeData = this.employeeForm.value;
          const employeeId = this.employeeId // Assuming employee object has an 'id' property
          this.editService.editEmployee(employeeId, updatedEmployeeData).subscribe(
            
            response => {
              console.log('Employee updated successfully:', response);
              // Handle success, e.g., show a success message to the user
            },
            error => {
            //   console.error('Error updating employee:', error);
              // Handle error, e.g., show an error message to the user
            }
          );
        } else {
          this.employeeForm.markAllAsTouched();
        }
        this.showSuccessMessage = true;
        
      }
  }
