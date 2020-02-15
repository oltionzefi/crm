/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const globalPrefix = 'api';
	app.setGlobalPrefix(globalPrefix);

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

	const port = process.env.port || 3333;
	await app.listen(port, () => {
		console.log(
			'Listening at http://localhost:' + port + '/' + globalPrefix,
		);
	});
}

bootstrap();
