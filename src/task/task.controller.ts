import { Controller, Post, Body } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() task: TaskDTO) {
    return this.taskService.createTask(task);
  }
}
