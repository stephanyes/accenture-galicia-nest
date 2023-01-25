import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 8888

  app.useGlobalPipes(
    new ValidationPipe({
      validatorPackage: require('class-validator'),
      whitelist: true,
      transformerPackage: require('class-transformer'),
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  )


  app.enableCors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH",
    allowedHeaders: "Content-Type, Authorization,Access-Control-Allow-Origin, id_channel, session_id",
    credentials: true
  })

  const config = new DocumentBuilder()
    .setTitle('Accenture - Galicia ABM')
    .setDescription('API de ABM')
    .setVersion('1.0')
    .setExternalDoc("Documentacion externa", "")
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'authorization',
      description: 'Enter JWT token',
      in: 'header'
    },'access-token')
    .build();

  const document = SwaggerModule.createDocument(app, config)


  SwaggerModule.setup('docs', app, document)

  await app.listen(PORT);
}
bootstrap();
