import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
export class DatabaseConfigration implements TypeOrmOptionsFactory{
  constructor()
  {}

  createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const options:TypeOrmModuleOptions=
      {
        type:"postgres",
        host:process.env.DB_HOST,
        port:Number(process.env.DB_PORT),
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_DATABASE,
        synchronize:true,
        autoLoadEntities:true
      }
      return options
  }

}