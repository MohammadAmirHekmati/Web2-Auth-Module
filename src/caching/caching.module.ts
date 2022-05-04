import { CacheModule, Module, OnModuleInit } from "@nestjs/common";
import * as redisStore from 'cache-manager-ioredis';
import { CachingService } from "./caching.service";

@Module({
  imports:[
    CacheModule.registerAsync({
      useFactory: () => {
        return {
          store: redisStore,
          host: process.env.REDIS_HOST,
          port: Number(process.env.REDIS_PORT)
        }
      },
    }),
  ],
  providers:[CachingService],
  exports:[CachingService]
})
export class CachingModule {
}
