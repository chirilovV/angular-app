import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {debounceTime, distinctUntilChanged, Subscription} from 'rxjs';

@Component ({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit, OnDestroy {
  keyword!: FormControl;
  formGroup!: FormGroup;
  subscription: Subscription | undefined;

  @Output () searchByName = new EventEmitter ();
  @Output () resetSearch = new EventEmitter ();

  constructor (private formBuilder: FormBuilder) {
  }

  ngOnInit (): void {
    this.formGroup = this.formBuilder.group ({
      keyword: ['']
    });

    this.subscription = this.formGroup.get ('keyword')?.valueChanges
      .pipe (debounceTime (500), distinctUntilChanged ())
      .subscribe (value => this.searchByName.emit (value?.trim ().toLowerCase ()));
  }

  reset (): void {
    this.formGroup.reset ({}, {emitEvent: false});
    this.resetSearch.emit ();
  }

  ngOnDestroy (): void {
    this.subscription?.unsubscribe ();
  }
}
