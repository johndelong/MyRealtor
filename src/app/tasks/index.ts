import { TaskService } from './task-service';

export { TaskService };
export { Tasks } from './tasks';
export { ITask } from './task';


export const TASKS_PROVIDERS: any[] = [
  TaskService
];
