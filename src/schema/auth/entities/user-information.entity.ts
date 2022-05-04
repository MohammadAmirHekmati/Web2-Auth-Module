import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({schema:"AUTH",name:"user-info"})
export class UserInformationEntity {
  @PrimaryGeneratedColumn("uuid")
  id:string

  @Column()
  firstName:string

  @Column()
  lastName:string

  @Column()
  age:number

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date
}