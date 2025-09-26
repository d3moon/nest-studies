import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';

@Injectable()
export class TaskService {
  private tasks: TaskDTO[] = [];

  createTask(task: TaskDTO): TaskDTO {
    this.tasks.push(task);
    return task;
  }

  findById(id: string): TaskDTO | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  updateTask(id: string, updatedTask: Partial<TaskDTO>): TaskDTO | undefined {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
      return this.tasks[taskIndex];
    }
    return undefined;
  }
}
