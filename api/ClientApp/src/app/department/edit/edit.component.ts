import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public name: string;
  public duplicatedName = false;

  constructor(
    public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit() {
    this.name = this.data.item.name;
  }

  public validateNameOnDuplicate() {
    for (let i = 0; i < this.data.departments.length; i++) {
      if (this.data.departments[i].name === this.name) {
        this.duplicatedName = true;
        return
      } else {
        this.duplicatedName = false;
      }
    };
  }
}
