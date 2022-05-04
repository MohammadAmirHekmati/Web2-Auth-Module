import { registerAs } from "@nestjs/config";
export default registerAs("app",()=>({
  name:process.env.APP_NAME,
  port:process.env.APP_PORT,
  prefix:process.env.APP_GLOBAL_PREFIX,
  mode:process.env.APP_MODE
}))