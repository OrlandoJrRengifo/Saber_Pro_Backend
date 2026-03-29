import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Saber Pro API')
    .setDescription('Documentacion de la API para la preparación de pruebas SABER PRO')
    .setVersion('1.0')
    .addTag('questions')
    .addTag('attempts')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
