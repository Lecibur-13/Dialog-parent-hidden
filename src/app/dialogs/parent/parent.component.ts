import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChildComponent } from '../child/child.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  constructor(
    private dialog: MatDialog,
    private _dialog: ModalService,
    private dialogRef: MatDialogRef<ParentComponent>){}

  openDialog() {
    this.dialog.open(ChildComponent, { width: '50%', height: '50%'})
    .afterClosed()
    .subscribe((result) => {
      this._dialog.show()
    });
  }

  close() {
    this.dialogRef.close()
  }
}
