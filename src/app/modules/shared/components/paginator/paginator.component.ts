import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component ({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input () totalCount!: number;
  @Output () nextPageEvent = new EventEmitter;

  length = this.totalCount;
  pageSize = 5;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  handlePageEvent (event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.length = this.totalCount;

    this.nextPageEvent.emit ({
      pageSize: this.pageSize,
      pageIndex: this.pageIndex
    });
  }

  ngOnInit (): void {
    this.length = this.totalCount;
  }
}
