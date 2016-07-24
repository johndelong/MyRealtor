import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClientService } from './';
import { ClientForm } from './client-form/client-form.component';
import { ClientList } from './client-list/client-list';


@Component({
  directives: [
    ClientForm,
    ClientList
  ],
  selector: 'clients',
  template: require('./clients.html')
})

export class Clients {
  filter: Observable<any>;

  constructor(public route: ActivatedRoute, public clientService: ClientService) {
    this.filter = route.params
      .pluck('completed')
      .do((value: string) => clientService.filterClients(value));
  }
}
