import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './repositories';

@Module({
	imports: [
		MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
	],
	controllers: [TasksController],
	providers: [TasksRepository],
})
export class TasksModule {}
