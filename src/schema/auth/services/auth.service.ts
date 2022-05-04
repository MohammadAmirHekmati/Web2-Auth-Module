import { Injectable } from "@nestjs/common";
import { RequestCodeResponse } from "../models/request-code.response";
import { RequestCodeDto } from "../dtos/request-code.dto";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";
import { UserInfoRepository } from "../repositories/user-info.repository";
import { CachingService } from "../../../caching/caching.service";
import { VerifyCodeResponse } from "../models/verify-code.response";
import { VerifyCodeDto } from "../dtos/verify-code.dto";
import { SecurityService } from "./security.service";
import { LoginResponse } from "../models/login.response";
import { SetOtpDto } from "../../../caching/dtos/set-otp.dto";

@Injectable()
export class AuthService {
  constructor(private userRepo:UserRepository,
              private userInfoRepo:UserInfoRepository,
              private cachingService:CachingService,
              private securityService:SecurityService
              )
  {}

   generateRandomCode():string
  {
    const code = (Math.floor(Math.random() * 90000) + 10000).toString();
    return code
  }

  async requestCode(requestCodeDto:RequestCodeDto):Promise<RequestCodeResponse>
  {
    const generatedCode=this.generateRandomCode()
      // TypeOrm Hooks dont work while you using Query Builder

      // this.userRepo.createQueryBuilder("u")
      //   .insert()
      //   .into(UserEntity)
      //   .values({mobile:requestCodeDto.mobileNumber})
      //   .execute()
    const setOtpDto:SetOtpDto=
      {
        otp:generatedCode,
        mobile:requestCodeDto.mobileNumber,
        prefix:requestCodeDto.mobilePrefix
      }
    await this.cachingService.setOtpCode(setOtpDto)

    return  new RequestCodeResponse(generatedCode,requestCodeDto.mobileNumber,requestCodeDto.mobilePrefix)
  }

  async verifyCode(verifyCodeDto:VerifyCodeDto):Promise<VerifyCodeResponse>
  {
    await this.securityService.checkUserOtp(verifyCodeDto.mobile,verifyCodeDto.mobilePrefix)
    const findUser=await this.userRepo.findUserWithNumber(verifyCodeDto.mobile,verifyCodeDto.mobilePrefix)
    if (findUser)
      return this.login(findUser.mobile)

    if (!findUser)
      return await this.register(verifyCodeDto.mobile,verifyCodeDto.mobilePrefix)
  }

  async register(mobile:string,mobilePrefix:string):Promise<VerifyCodeResponse>
  {
    const user=new UserEntity()
    user.mobile=mobile
    user.mobilePrefix=mobilePrefix
    const save=await this.userRepo.save(await this.userRepo.create(user))
    return new VerifyCodeResponse(save.mobile,"Welcome to our Website")
  }

  async login(mobile:string):Promise<LoginResponse>
  {
    return new LoginResponse(mobile,"Welcome to our Website")
  }
}