
// A component's job is to enable the user experience and nothing more.
// It mediates between the view (rendered by the template) and the application logic
// (which often includes some notion of a "model").
// A good component presents properties and methods for data binding.
// It delegates everything non-trivial to services.


import { Component } from '@angular/core';
import { ShowingService } from './showing.service';

console.log('`Showing List` component loaded asynchronously');

@Component({
  selector:    'showing-list',
  templateUrl: 'app/showings/showing-list.component.html',
  directives:  [],
  providers:   [ShowingService],
  styles: [require('./showing-list.css')]
})
export class ShowingList {

  constructor(private service: ShowingService) { }

  showings: any[];
  selectedShowing: any;

  ngOnInit() {
    console.log('hello `Showing List` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    // this.asyncDataWithWebpack();

    this.showings = this.service.getShowings();
  }
  asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    // var asyncMockDataPromiseFactory = require('es6-promise!assets/mock-data/mock-data.json');
    // setTimeout(() => {
    //
    //   let asyncDataPromise = asyncMockDataPromiseFactory();
    //   asyncDataPromise.then(json => {
    //     console.log('async mockData', json);
    //   });
    //
    // });
  }

  selectShowing(showing: any) { this.selectedShowing = showing; }

}
