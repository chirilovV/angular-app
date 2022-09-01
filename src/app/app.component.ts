import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  @Input() toggleControl = new FormControl(false);

  @HostBinding('class') className = '';

  constructor() { }

  ngOnInit(): void {
  }
}
