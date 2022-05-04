import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from "./configuration/app/app-config.service";
import { SwaggerService } from "./configuration/swagger/swagger.service";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfigService=app.get<AppConfigService>(AppConfigService)
  app.setGlobalPrefix(appConfigService.globalPrefix)

  const swaggerService=app.get<SwaggerService>(SwaggerService)
  const appMode=appConfigService.mode
    if (appMode=="developer")
      swaggerService.initialize(app)

  app.useGlobalPipes(new ValidationPipe())
  await app.listen(appConfigService.appPort);
}
bootstrap();
