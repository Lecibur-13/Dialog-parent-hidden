import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ParentComponent } from './dialogs/parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hide-parent';

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ParentComponent, { width: '80%', height: '80%' });
  }
}
