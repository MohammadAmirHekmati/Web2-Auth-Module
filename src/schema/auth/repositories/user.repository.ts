import { EntityRepository, Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { BadRequestException, ConflictException, HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity>{

  async findUserWithNumber(mobile:string,mobilePrefix:string):Promise<UserEntity>
  {
    const findUser=await this.createQueryBuilder("u")
      .select("u")
      .where("u.mobile =:mobile",{mobile})
      .andWhere("u.mobilePrefix=:mobilePrefix",{mobilePrefix})
      .getOne()

    // const findUser=await this.findOne({where:{mobile:mobile,mobilePrefix:mobilePrefix}})
    console.log(findUser);
    return findUser
  }
}