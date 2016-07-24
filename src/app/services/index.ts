import { TaskService } from './task.service';
import { ClientService } from './client.service';

export {ClientService, TaskService}


export const SERVICE_PROVIDERS: any[] = [
  TaskService,
  ClientService
];
