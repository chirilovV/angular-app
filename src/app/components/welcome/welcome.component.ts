import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public pageTitle: string | undefined;

  @Input()
  title: string | undefined;

  ngOnInit(): void {
    this.pageTitle = this.title
  }
}
