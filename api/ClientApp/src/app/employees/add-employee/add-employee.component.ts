import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  public item = {
    name: '',
    tel: null,
    email: '',
    dateOfBirth: '',
    depId: ''
  };
  public duplicatedEmail = false;

  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }


  ngOnInit() {
    this.item.depId = this.data.currentDepId;
  }

  public validateEmailOnDuplicate() {
    for (let i = 0; i < this.data.employeesList.length; i++) {
      if (this.data.employeesList[i].email === this.item.email) {
        this.duplicatedEmail = true;
        return
      } else {
        this.duplicatedEmail = false;
      }
    };
  }
}
