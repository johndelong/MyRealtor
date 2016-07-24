import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../auth';
import { IClient, Client } from './client';


@Injectable()
export class ClientService {
  visibleClients$: Observable<IClient[]>;

  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredClients$: FirebaseListObservable<IClient[]>;
  private clients$: FirebaseListObservable<IClient[]>;


  constructor(af: AngularFire, auth: AuthService) {
    const path = `/clients/${auth.id}`;

    this.clients$ = af.database.list(path);

    this.filteredClients$ = af.database.list(path, {query: {
      orderByChild: 'lastName',
      equalTo: this.filter$
    }});

    this.visibleClients$ = this.filter$
      .switchMap(filter => filter === null ? this.clients$ : this.filteredClients$);
  }


  filterClients(filter: string): void {
    switch (filter) {
      case 'false':
        this.filter$.next(false);
        break;

      case 'true':
        this.filter$.next(true);
        break;

      default:
        this.filter$.next(null);
        break;
    }
  }

  createClient(client: IClient): firebase.Promise<any> {
    return this.clients$.push(client);
  }

  removeClient(client: IClient): firebase.Promise<any> {
    return this.clients$.remove(client.$key);
  }

  updateClient(client: IClient, changes: any): firebase.Promise<any> {
    return this.clients$.update(client.$key, changes);
  }
}
