import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TaskService } from '../services';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { Subscription } from 'rxjs';

@Component({
  directives: [
    TaskForm,
    TaskList,
  ],
  selector: 'tasks',
  template: require('./tasks.html'),
})

export class Tasks implements OnInit {
  filter: Observable<any>;
  sub: Subscription;

  constructor(public router: Router, public route: ActivatedRoute, public taskService: TaskService) {
    this.filter = route.params
      .pluck('completed')
      .do((value: string) => taskService.filterTasks(value));

    this.sub = this.router
      .routerState
      .queryParams
      .subscribe(params => {
        this.taskService.getTasksForClient(params['client_id']);
      });
  }

  ngOnInit(): any {
    // helpful when testing
    console.log('testing!!!');
  }
}
