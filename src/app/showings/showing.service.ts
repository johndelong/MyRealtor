import { Injectable } from '@angular/core';

@Injectable()
export class ShowingService {
  constructor() { }

  private showings: any = [
    {
      'address' : '123 Main Street',
      'time' : '3pm'
    },
    {
      'address' : '456 South Street',
      'time' : '8pm'
    }
  ];

  getShowings() {
    return this.showings;
  }
}
