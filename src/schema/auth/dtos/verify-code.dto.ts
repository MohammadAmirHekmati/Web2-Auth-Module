import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength, Validate } from "class-validator";
import { MobileCustomValidation } from "../custom-validation/mobile-custom.validation";
import { PrefixCustomValidation } from "../custom-validation/prefix-custom.validation";
import { PrefixStartValidation } from "../custom-validation/prefix-start.validation";
import { MobileStartValidation } from "../custom-validation/mobile-start.validation";

export class VerifyCodeDto {

  @ApiProperty({example:"+98",description:"Please put your mobile prefix with +"})
  @IsNotEmpty()
  @IsString()
  @Validate(PrefixCustomValidation)
  @Validate(PrefixStartValidation)
  mobilePrefix:string

  @ApiProperty({example:"9350000000",description:"Please put your number without 0"})
  @IsNotEmpty()
  @IsString()
  @Validate(MobileCustomValidation)
  @Validate(MobileStartValidation)
  mobile:string

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  otpCode:string
}