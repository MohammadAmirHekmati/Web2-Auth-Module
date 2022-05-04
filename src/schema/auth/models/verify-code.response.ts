export class VerifyCodeResponse {
  mobile:string
  message:string

  constructor(mobile:string,message:string)
  {
    this.mobile=mobile
    this.message=message
  }
}