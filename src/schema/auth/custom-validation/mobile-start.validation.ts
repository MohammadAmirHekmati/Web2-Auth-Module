import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class MobileStartValidation implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    if (text.startsWith("0"))
      return false
    else
      return true
  }

  defaultMessage(args: ValidationArguments) {
    return `Mobile Number should be without 0`
  }
}