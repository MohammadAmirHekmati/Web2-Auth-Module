export class RequestCodeResponse {
  code:string
  prefix:string
  mobile:string

  constructor(code:string,mobile:string,prefix:string)
  {
    this.prefix=prefix
    this.code=code
    this.mobile=mobile
  }
}