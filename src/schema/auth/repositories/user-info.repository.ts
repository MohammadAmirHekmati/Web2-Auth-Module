import { EntityRepository, Repository } from "typeorm";
import { UserInformationEntity } from "../entities/user-information.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
@EntityRepository(UserInformationEntity)
export class UserInfoRepository extends Repository<UserInformationEntity>{

}