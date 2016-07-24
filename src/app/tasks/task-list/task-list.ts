import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from '../../models';
import { TaskItem } from './task-item/task-item';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    TaskItem
  ],
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
template: require('./task-list.html')
})

export class TaskList {
  @Input() filter: string;
  @Input() tasks: FirebaseListObservable<ITask[]>;

  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);
}
