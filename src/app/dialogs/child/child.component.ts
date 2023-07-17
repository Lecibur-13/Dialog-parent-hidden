import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(
    private _dialog: ModalService,
    private dialogRef: MatDialogRef<ChildComponent>) { }

  ngOnInit(): void {
    this._dialog.hide()
  }

  close() {
    this.dialogRef.close()
  }

}
