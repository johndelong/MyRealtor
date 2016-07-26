import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ClientService, TaskService } from '../services';
import { ClientForm } from './client-form/client-form.component';
import { ClientList } from './client-list/client-list.component';
import { IClient } from '../models';

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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientService,
    private taskService: TaskService
  ) {
    this.filter = route.params
      .pluck('completed')
      .do((value: string) => clientService.filterClients(value));
  }

  open(client: IClient): void {
    // this.clientService.currentClient = client;
    // this.taskService.getTasksForClient(client);

    let navigationExtras = {
      queryParams: { 'client_id': client.$key },
      fragment: 'anchor',
    };

    this.router.navigate(['/checklist'], navigationExtras);
  }
}
