import { Module } from '@nestjs/common';
import { WorkflowsController } from './workflows.controller';

@Module({
	controllers: [WorkflowsController],
})
export class WorkflowsModule {}
