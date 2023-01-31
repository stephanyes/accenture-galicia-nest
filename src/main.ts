import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TestInterceptor } from './interceptor/interceptor.interceptor';
import { ConfigService } from '@nestjs/config';
import { documentBuilderConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { server, validationPipes } = app.get<ConfigService>(ConfigService)['internalConfig']['config']
  const PORT = parseInt(server.port, 10) || 8000

  app.useGlobalInterceptors(new TestInterceptor())
  app.useGlobalPipes(new ValidationPipe(validationPipes))
  app.enableCors(server.corsOptions)

  const document = SwaggerModule.createDocument(app, documentBuilderConfig)
  SwaggerModule.setup('docs', app, document)

  await app.listen(PORT, () => {
    console.log(`App running on: http://localhost:${PORT}`)
  });
}
bootstrap();
