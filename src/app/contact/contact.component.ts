import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(public dialogRef: MatDialogRef<ContactComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  saveData(): void {
    this.dialogRef.close(this.data);
  }
}
