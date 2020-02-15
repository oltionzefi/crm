import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '../guards';

@Controller('forms')
@UseGuards(AuthGuard)
export class FormsController {
	@Get()
	async findAllTasks(): Promise<string[]> {
		return ['first form', 'second form'];
	}
}
