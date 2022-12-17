import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '../guards';

@Controller('workflows')
@UseGuards(AuthGuard)
export class WorkflowsController {
  @Get()
  async findAllTasks(): Promise<string[]> {
    return ['first workflow', 'second workflow'];
  }
}
