import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public item: { id: number, name: string, tel: number, email: string, dateOfBirth: string, height: number, depId: string };
  public duplicatedEmail = false;

  constructor(public dialogRef: MatDialogRef<EditEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.item = {
      id: this.data.item.id,
      name: this.data.item.name,
      email: this.data.item.email,
      tel: this.data.item.tel,
      height: this.data.item.height,
      depId: this.data.item.depId,
      dateOfBirth: this.data.item.dateOfBirth
    };
  }

  public validateEmailOnDuplicate() {
    if (this.data.fullEmployeesList && this.data.fullEmployeesList.length) {
      for (let i = 0; i < this.data.fullEmployeesList.length; i++) {
        if (this.data.fullEmployeesList[i].email === this.item.email) {
          this.duplicatedEmail = true;
          return
        } else {
          this.duplicatedEmail = false;
        }
      }
    };
  }
}
