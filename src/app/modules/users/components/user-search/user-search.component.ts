import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {
  keyword!: FormControl;

  @Output() searchByName = new EventEmitter();
  @Output() resetSearch = new EventEmitter();

  ngOnInit(): void {
    this.keyword = new FormControl('');
  }

  applyFilter(search: string): void {
    this.searchByName.emit(search)
  }
}
