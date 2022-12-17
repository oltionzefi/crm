import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
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
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
        dbName: 'crm',
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
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
