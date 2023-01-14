/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  const configService = app.select(ConfigModule).get(ConfigService);

  const options = new DocumentBuilder()
    .setTitle('CRM API')
    .setDescription(
      'Our CRM API allows developers to integrate the CRM ' +
        'to just about any system or app you use. ' +
        'This includes your other web based application. ' +
        'Consequently, you can share data between your systems and streamline your business processes.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(globalPrefix, app, document);

  const port = configService.get<number>('API_HTTP_PORT') || 3000;
  const host = configService.get<string>('API_HTTP_HOST') as string;
  app.listen(port, host);

  Logger.debug(`Pricing Microservice running on: ${host}:${port}`);
}

bootstrap();
