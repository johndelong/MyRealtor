import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IClient } from '../client';
import { Autofocus } from '../../../common';


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
//   title: string = '';
//   client: Client = new Client('', '', '');

//   editTitle(): void {
//     this.editing = true;
//     this.title = this.task.title;
//   }

//   saveTitle(): void {
//     if (this.editing) {
//       const title: string = this.title.trim();
//       if (title.length && title !== this.task.title) {
//         this.update.emit({title});
//       }
//       this.stopEditing();
//     }
//   }

//   stopEditing(): void {
//     this.editing = false;
//   }

//   toggleStatus(): void {
//     this.update.emit({
//       completed: !this.task.completed
//     });
//   }
}
