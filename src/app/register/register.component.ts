import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/Employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isDisplay: Boolean;
  employee: object;
  employeeList: any=[];
  name: string;
  dept:string;
  gen:string;
  fName:string;
  lName:string;
  dob:Date;
  department = [
    {name: "Legal"},
    {name: "E-commerce"},
    {name: "IT"},
    {name: "Medical"}
  ];
  constructor(private _registerService: RegisterService, private _router: Router) { }

  ngOnInit() {
    this.isDisplay= false;
  }

  getEmployeeList()
  {
    this._registerService.getAllEmployees().subscribe(data=>{
      this.employeeList = data;
    });
    this.isDisplay= true;
  }

  submit(form: NgForm)
  {
    console.log(this.dept)
    console.log(this.fName)
    console.log(this.lName)
    console.log(this.gen)
    console.log(this.dob)
    if(this.fName != null && this.lName != null && this.dob != null && this.gen != null && this.department != null)
    {
      this.employee = {firstName: this.fName, lastName: this.lName, gender: this.gen, dob: this.dob, department: this.dept};
      let response = this._registerService.registerEmployee(this.employee);
      console.log(response);
      form.reset();
    }
    else
    {
      alert("Please fillout all the fields");
    }
  }
}
