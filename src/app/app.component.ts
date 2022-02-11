import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    {id: 1, name:"Ryan", country: "USA"},
    {id: 2, name:"Mathew", country: "USA"},
    {id: 3, name:"Ada", country: "USA"},
  ];


selectedEmployee: Employee = new Employee();

openForEdit(employee: Employee) {
  this.selectedEmployee = employee;
}

addOrEdit() {
  if(this.selectedEmployee.id === 0){
    this.selectedEmployee.id = this.employeeArray.length + 1;
    this.employeeArray.push(this.selectedEmployee);

  }
  this.selectedEmployee = new Employee();
}

delete(){
 //si presiona ok, me da TRUE y ejecuta 
  if (confirm('¿Estas seguro que quieres eliminar el empleado?')){ 
     //quita el empleado
  this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
  this.selectedEmployee = new Employee();
  }
}

}