import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDTO[] = [];

  createTask(task: TaskDTO): TaskDTO {
    this.tasks.push(task);
    return task;
  }
}
