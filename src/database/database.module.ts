import { Module } from '@nestjs/common';
import { ConfigurationModule } from "../configuration/configuration.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseConfigration } from "./database.configration";

@Module({
  imports:[ConfigurationModule,TypeOrmModule.forRootAsync({useClass:DatabaseConfigration})]
})
export class DatabaseModule {}
