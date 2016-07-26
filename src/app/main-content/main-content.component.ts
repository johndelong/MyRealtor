import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { AppHeader } from './app-header';

@Component({
  styles: [require('./main-content.scss')],
  template: require('./main-content.html'),
  directives: [
    AppHeader,
  ],
})
export class Main {

  views: Object[] = [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'dashboard',
    },
    {
      name: 'About',
      url: '/about',
      icon: 'info',
    },
  ];

  sidenavMode: string;
  sidenavOpened: boolean;
  isSmallWidth: boolean;

  // TypeScript public modifiers
  constructor(
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.onResize(window.event);
  }

  onResize(event): void {
    if (window.innerWidth < 1024) {
      this.isSmallWidth = true;
      this.sidenavOpened = false;
      this.sidenavMode = 'over';
    } else {
      this.isSmallWidth = false;
      this.sidenavMode = 'side';
      this.sidenavOpened = true;
    }
  }

  signOut(): void {
    this.authService.signOut();
    // window.location.replace('/login');
    this.router.navigateByUrl('/login');
  }

  // logout(): void {
  //   // this.authService.logout();
  //   this.router.navigateByUrl('/login');
  // }
}
