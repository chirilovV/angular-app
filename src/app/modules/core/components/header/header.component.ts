import {Component, OnInit} from '@angular/core';
import {AppRouteEnum} from "../../Enums/appRouteEnum";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appPaths = AppRouteEnum;

  constructor() {
  }

  ngOnInit(): void {
  }

}
