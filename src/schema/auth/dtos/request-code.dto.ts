import { IsNotEmpty, IsString, MaxLength, MinLength, Validate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { MobileCustomValidation } from "../custom-validation/mobile-custom.validation";
import { MobileStartValidation } from "../custom-validation/mobile-start.validation";
import { PrefixCustomValidation } from "../custom-validation/prefix-custom.validation";
import { PrefixStartValidation } from "../custom-validation/prefix-start.validation";

export class RequestCodeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({example:"9350000000",description:"Please put your number without 0"})
  @Validate(MobileCustomValidation)
  @Validate(MobileStartValidation)
  mobileNumber:string

  @ApiProperty({example:"+98",description:"Please put your mobile prefix with +"})
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(5)
  @Validate(PrefixCustomValidation)
  @Validate(PrefixStartValidation)
  mobilePrefix:string
}