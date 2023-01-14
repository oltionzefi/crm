import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Task, TaskSchema } from './schemas';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './repositories';

@Module({
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  controllers: [TasksController],
  providers: [TasksRepository],
})
export class TasksModule {}
