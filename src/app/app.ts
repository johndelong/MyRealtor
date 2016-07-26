import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [
    require('./app.scss'),
  ],
  template: '<router-outlet></router-outlet>',
})

export class App {
  constructor() {}
}
