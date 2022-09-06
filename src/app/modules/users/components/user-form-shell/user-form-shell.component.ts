import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'user-form-shell',
  templateUrl: './user-form-shell.component.html',
  styleUrls: ['./user-form-shell.component.scss']
})
export class UserFormShellComponent implements OnInit {
  formGroup!: FormGroup

  @Output() submitForm = new EventEmitter();

  constructor(private fb: FormBuilder,) {
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      addresses: this.fb.array([])
    })
  }

  onSubmit(): void {
    this.formGroup.markAsDirty();
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) this.submitForm.emit(this.formGroup);
  }
}
