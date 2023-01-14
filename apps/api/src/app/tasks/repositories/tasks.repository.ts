import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Task } from '../models';

@Injectable()
export class TasksRepository {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async findAll(): Promise<Task[]> {
    return this.taskModel.find();
  }

  async findTaskByUrl(taskUrl: string): Promise<Task> {
    return this.taskModel.findOne({ url: taskUrl });
  }

  // This should return a promise
  updateTask(taskId: string, changes: Partial<Task>) {
    return this.taskModel.findOneAndUpdate({ _id: taskId }, changes, {
      new: true,
    });
  }

  deleteTask(taskId: string) {
    return this.taskModel.deleteOne({ _id: taskId });
  }

  async addTask(task: Partial<Task>): Promise<Task> {
    const newEntity = new this.taskModel(task);

    await newEntity.save();

    return newEntity;
  }
}
