import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AppConfigService {
  constructor(private configService:ConfigService)
  {}

  get appPort():number
  {
    return Number(this.configService.get<number>("app.port"))
  }

  get globalPrefix():string
  {
    return this.configService.get("app.prefix")
  }

  get mode():string
  {
    return this.configService.get("app.mode")
  }
}