import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class PrefixStartValidation implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    if (text.startsWith("+"))
      return true
    else
      return false
  }

  defaultMessage(args: ValidationArguments) {
    return `Mobile Prefix should be started with +`
  }
}