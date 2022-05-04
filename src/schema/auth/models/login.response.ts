export class LoginResponse {
  message:string
  mobile:string

  constructor(mobile:string,message:string)
  {
    this.mobile=mobile
    this.message=message
  }
}