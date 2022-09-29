import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialog} from '../../models/confirm-dialog.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})

export class ConfirmDialogComponent implements OnInit {
  confirm!: ConfirmDialog;

  constructor(
    public dialog: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialog
  ) {
  }

  ngOnInit(): void {
    this.confirm = this.data;
  }

  onConfirm(): void {
    this.dialog.close(true);
  }

  onDismiss(): void {
    this.dialog.close(false);
  }
}
