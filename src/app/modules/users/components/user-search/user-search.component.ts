import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  keyword!: FormControl;
  formGroup!: FormGroup;

  @Output() searchByName = new EventEmitter();
  @Output() resetSearch = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      keyword: ['']
    });
  }

  applyFilter(): void {
    this.formGroup.get('keyword')?.valueChanges?.pipe(
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe(
      value => this.searchByName.emit(value?.trim().toLowerCase())
    )
  }

  reset() {
    this.formGroup.reset()
    this.resetSearch.emit()
  }
}
