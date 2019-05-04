import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public name: string = '';
  public duplicatedName = false;

  constructor(public dialogRef: MatDialogRef<AddComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  public validateNameOnDuplicate() {
    if (this.data.departments && this.data.departments.length) {
      for (let i = 0; i < this.data.departments.length; i++) {
        if (this.data.departments[i].name === this.name) {
          this.duplicatedName = true;
          return
        } else {
          this.duplicatedName = false;
        }
      }
    };
  }
}
