import { Controller, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '../guards';

@Controller('notifications')
@UseGuards(AuthGuard)
export class NotificationsController {
	@Get()
	async findAllTasks(): Promise<string[]> {
		return ['first notification', 'second notification'];
	}
}
