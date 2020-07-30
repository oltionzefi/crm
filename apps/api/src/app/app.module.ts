import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthModule } from './auth';
import { ContactsModule, ContactsController } from './contacts';
import { NotesModule, NotesController } from './notes';
import { TasksModule, TasksController } from './tasks';
import { InstitutionsModule, InstitutionsController } from './institutions';
import { WorkflowsModule, WorkflowsController } from './workflows';
import { FormsModule, FormsController } from './forms';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from '../constants';
import { UserMiddleware } from './middlewares';
import { AuthGuard } from './guards';

@Module({
	imports: [
		AuthModule,
		ContactsModule,
		NotesModule,
		TasksModule,
		InstitutionsModule,
		WorkflowsModule,
		FormsModule,
		MongooseModule.forRoot(MONGO_CONNECTION),
	],
	controllers: [AppController],
	providers: [AppService, AuthGuard],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer): void {
		consumer
			.apply(UserMiddleware)
			.forRoutes(
				ContactsController,
				NotesController,
				TasksController,
				WorkflowsController,
				FormsController,
				InstitutionsController,
			);
	}
}
