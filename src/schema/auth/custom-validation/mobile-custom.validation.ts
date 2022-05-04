import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';

@ValidatorConstraint({ name: 'customText', async: false })
export class MobileCustomValidation implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const min=4
    const max=12
  if (text.length<min || text.length>max)
    return false
    else
      return true
  }

  defaultMessage(args: ValidationArguments) {
    return `Mobile Number should be Between 4 and 12 character`
  }
}