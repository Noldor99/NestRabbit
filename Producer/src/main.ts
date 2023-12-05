import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });

  app.enableCors({ credentials: true, origin: true });

  const config = new DocumentBuilder()
    .setTitle('Облачное хранилище')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
    },
  });

  try {
    await app.listen(7777);
    console.log('Сервер запущений на порту 7777');
    console.log('Підключення до бази даних успішне');
  } catch (error) {
    console.log('Помилка запуску сервера:', error);
  }
}
bootstrap();
