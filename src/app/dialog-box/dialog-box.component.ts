import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogboxComponent {
  constructor(private dialogRef: MatDialogRef<DialogboxComponent>) {}
  
  public closeDialogbox() {
    this.dialogRef.close();
  }
};