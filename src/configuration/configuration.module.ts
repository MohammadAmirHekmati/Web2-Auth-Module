import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import appConfiguration from "./app/configuration"
import { AppConfigService } from "./app/app-config.service";
import swaggerConfiguration from "./swagger/configuration"
import { SwaggerService } from "./swagger/swagger.service";

@Module({
  imports:[ConfigModule.forRoot({
    load:[appConfiguration,swaggerConfiguration]
  })],
  providers:[AppConfigService,SwaggerService]
})
export class ConfigurationModule {}
