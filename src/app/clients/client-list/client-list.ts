import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IClient } from '../client';
import { ClientItem } from '../client-item/client-item';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    ClientItem
  ],
  selector: 'client-list',
  styles: [
    // require('./task-list.scss')
  ],
  template: require('./client-list.html')
})

export class ClientList {
  @Input() filter: string;
  @Input() clients: FirebaseListObservable<IClient[]>;

  open() {
    
  }

//   @Output() remove: EventEmitter<any> = new EventEmitter(false);
//   @Output() update: EventEmitter<any> = new EventEmitter(false);
}
