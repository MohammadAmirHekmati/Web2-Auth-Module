import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./repositories/user.repository";
import { UserInfoRepository } from "./repositories/user-info.repository";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { CachingModule } from "../../caching/caching.module";
import { CachingService } from "../../caching/caching.service";
import { SecurityService } from "./services/security.service";

@Module({
  imports:[CachingModule,TypeOrmModule.forFeature([UserRepository,UserInfoRepository])],
  controllers:[AuthController],
  providers:[AuthService,SecurityService]
})
export class AuthModule {}
