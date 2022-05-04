import {
  AfterInsert,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { UserInformationEntity } from "./user-information.entity";
import { ProfileStatusEnum } from "../enums/profile-status.enum";

@Entity({schema:"AUTH",name:"user"})
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id:string

  @Column({length:5})
  mobilePrefix:string

  @Column({length:15})
  mobile:string

  @CreateDateColumn()
  createdAt:Date

  @Column({type:"enum",enum:ProfileStatusEnum,default:ProfileStatusEnum.NOT_CREATED})
  profileStatus:ProfileStatusEnum

  @OneToOne(()=>UserInformationEntity)
  @JoinColumn()
  obj_user_info:UserInformationEntity

  @BeforeInsert()
  setMobilePrefix()
  {
    const mobileNumber=this.mobile
    if (mobileNumber.length>10 && mobileNumber.startsWith("0"))
    {
      const normalizedNumber=mobileNumber.substring(1)
      this.mobile=`+98${normalizedNumber}`
    }
  }
}