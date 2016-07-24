import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IClient } from '../../../models';
import { Autofocus } from '../../../../common';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    Autofocus
  ],
  selector: 'client-item',
  styles: [
    // require('./client-item.scss')
  ],
  template: require('./client-item.html')
})

export class ClientItem {
  @Input() client: IClient;
//   @Output() remove: EventEmitter<any> = new EventEmitter(false);
//   @Output() update: EventEmitter<any> = new EventEmitter(false);

  editing: boolean = false;
}
