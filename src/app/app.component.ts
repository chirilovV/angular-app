import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  subscription: Subscription | undefined;

  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const appTitle = this.titleService.getTitle();

    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        const child = this.activatedRoute.firstChild;
        if(child?.snapshot.data['title']) {
          return child.snapshot.data['title'];
        }
        return appTitle;
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
