import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class PrefixCustomValidation implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const min=2
    const max=5
    if (text.length<min || text.length>max)
      return false
    else
      return true
  }

  defaultMessage(args: ValidationArguments) {
    return `Prefix should be between 2 and 5 character`
  }
}