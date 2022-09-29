import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppRouteEnum} from '../../../core/Enums/appRouteEnum';

export interface NavLink {
  label: string;
  route: string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})


export class UserDetailsComponent implements OnInit {
  navLinks: NavLink[] = [
    {label: 'Label 1', route: '/route1'},
    {label: 'Label 2', route: '/route2'}
  ];

  appPaths = AppRouteEnum;

  activeLink = this.navLinks[0];

  constructor(private router: Router) {
//    this.router.events.pipe(
//      filter((event) => event instanceof NavigationEnd)
//    ).subscribe(
//      (nav) => (
////        this.selectedIndex = this.navItems.findIndex(
////          (nav: { route: string; }) => nav.route === this.router.url
////        )
//      )
//    );
  }

  ngOnInit(): void {
//    this.router.events.pipe(take(1)).subscribe(() => {
//      let tab = this.navLinks.find((tab) => {
//        return this.router.url + tab.link;
//      });
//      console.log(tab);
//
//      if(tab?.index) {
//        this.activeLinkIndex = this.navLinks.indexOf(tab);
//      }
//    });
  }
}
