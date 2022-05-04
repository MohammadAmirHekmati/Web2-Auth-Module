import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "../services/auth.service";
import { RequestCodeDto } from "../dtos/request-code.dto";
import { RequestCodeResponse } from "../models/request-code.response";
import { VerifyCodeDto } from "../dtos/verify-code.dto";
import { VerifyCodeResponse } from "../models/verify-code.response";

@ApiTags("[AUTH]")
@Controller("auth")
export class AuthController {
  constructor(private authService:AuthService)
  {}

  @Post("request/code")
  async requestCode(@Body() requestCodeDto:RequestCodeDto):Promise<RequestCodeResponse>
  {
    return this.authService.requestCode(requestCodeDto)
  }

  @Post("verify/code")
  async verifyCode(@Body() verifyCodeDto:VerifyCodeDto):Promise<VerifyCodeResponse>
  {
    return this.authService.verifyCode(verifyCodeDto)
  }
}