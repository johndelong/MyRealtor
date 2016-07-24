import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'client-form',
  styles: [
    require('./client-form.scss')
  ],
  template: require('./client-form.html')
})

export class ClientForm {
  @Output() createClient: EventEmitter<any> = new EventEmitter(false);

  client: Client = new Client('','','');

  clear(): void {
    this.client = new Client('','','');
  }

  submit(): void {
    // const title: string = this.title.trim();
    // if (title.length) {
      this.createClient.emit(this.client);
    // }
    this.clear();
  }
}
