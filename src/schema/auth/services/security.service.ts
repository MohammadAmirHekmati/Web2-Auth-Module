import { BadRequestException, Injectable } from "@nestjs/common";
import { CachingService } from "../../../caching/caching.service";
import { GetOtpDto } from "../../../caching/dtos/get-otp.dto";

@Injectable()
export class SecurityService {
  constructor(private cachingService:CachingService)
  {}

  async checkUserOtp(mobile:string,prefix:string):Promise<string>
  {
    const getOtpDto:GetOtpDto=
      {
        mobile:mobile,
        prefix:prefix
      }
    const findUser=await this.cachingService.getOtpCode(getOtpDto)
    if (findUser)
      return findUser

    if (!findUser)
      throw new BadRequestException(`Your otp code expired`)
  }
}