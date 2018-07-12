import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../modal/employee.interface';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  name: string;
  address: string;
  gender: string;
 employeeArray: IEmployee[] = [];
 ngOnInit() {
   const details = localStorage.getItem('employeeDetails');
   this.employeeArray = JSON.parse(details) || [];
 }

 verify() {
   const employee: IEmployee = { 'name': this.name, 'address': this.address, 'gender': this.gender };
   this.employeeArray.push(employee);
   console.log('Model is');
   console.log(this.employeeArray);
   console.log('Stringified Model is');
   console.log(JSON.stringify(this.employeeArray));
   // Update the object into storage
   localStorage.setItem('employeeDetails', JSON.stringify(this.employeeArray));
 }


}