import { Module } from '@nestjs/common';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { CachingModule } from './caching/caching.module';
import { AuthModule } from './schema/auth/auth.module';

@Module({
  imports: [ConfigurationModule, DatabaseModule, CachingModule, AuthModule]
})
export class AppModule {}
