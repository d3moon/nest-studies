import { Controller, Post, Body, Param, Get, NotFoundException, HttpStatus, Put } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {

  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() task: TaskDTO) {
    return this.taskService.createTask(task);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    const task = this.taskService.findById(id);
    console.log(task);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() updatedTask: Partial<TaskDTO>) {
    const task = this.taskService.updateTask(id, updatedTask);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

}
