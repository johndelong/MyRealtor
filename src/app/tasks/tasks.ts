import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../services';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  directives: [
    TaskForm,
    TaskList
  ],
  selector: 'tasks',
  template: require('./tasks.html')
})

export class Tasks {
  filter: Observable<any>;

  constructor(public route: ActivatedRoute, public taskService: TaskService) {
    this.filter = route.params
      .pluck('completed')
      .do((value: string) => taskService.filterTasks(value));
  }
}
