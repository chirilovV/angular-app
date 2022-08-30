import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

  @Input() item: any;
  @Input() isActionShowing: boolean = true;
  @Output() newItemEvent = new EventEmitter();

  constructor() {
  }

}
