import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import {Cache} from 'cache-manager';
import { SetOtpDto } from "./dtos/set-otp.dto";
import { GetOtpDto } from "./dtos/get-otp.dto";

@Injectable()
export class CachingService {
  constructor(@Inject(CACHE_MANAGER) private cache:Cache)
  {}

  async setOtpCode(setOtpDto:SetOtpDto):Promise<string>
  {
    const ttl=Number(process.env.SMS_TTL)
    const setCache=await this.cache.set(`${setOtpDto.prefix}${setOtpDto.mobile}`,`${setOtpDto.otp}`,{ttl})
    return setCache
  }

  async getOtpCode(getOtpDto:GetOtpDto):Promise<string>
  {
    return await this.cache.get(`${getOtpDto.prefix}${getOtpDto.mobile}`)
  }
}