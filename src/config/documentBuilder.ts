import { DocumentBuilder } from '@nestjs/swagger'

export const documentBuilderConfig = new DocumentBuilder()
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