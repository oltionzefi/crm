import {
  Controller,
  UseGuards,
  Post,
  Body,
  Get,
  Param,
  NotFoundException,
  Put,
  BadRequestException,
  Delete,
} from '@nestjs/common';

import { AuthGuard } from '../guards';
import { TasksRepository } from './repositories';
import { Task } from './models';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TasksController {
  constructor(private tasksRepository: TasksRepository) {}

  @Post()
  @UseGuards(AuthGuard)
  async createTask(@Body() task: Task): Promise<Task> {
    return this.tasksRepository.addTask(task);
  }

  @Get()
  async findAllTasks(): Promise<Task[]> {
    return this.tasksRepository.findAll();
  }

  @Get(':taskUrl')
  async findTaskByUrl(@Param('taskUrl') taskUrl: string) {
    const task = await this.tasksRepository.findTaskByUrl(taskUrl);

    if (!task) {
      throw new NotFoundException('Could not find task for url' + taskUrl);
    }
  }

  @Put(':taskId')
  @UseGuards(AuthGuard)
  async updateTask(@Param('taskId') taskId: string, @Body() changes: Task): Promise<Task> {
    if (changes._id) {
      throw new BadRequestException('Can not update entity id');
    }

    return this.tasksRepository.updateTask(taskId, changes);
  }

  @Delete(':taskId')
  @UseGuards(AuthGuard)
  async deleteEntity(@Param('taskId') taskId: string) {
    return this.tasksRepository.deleteTask(taskId);
  }
}
