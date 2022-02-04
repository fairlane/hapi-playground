import {Entity, Column} from "typeorm";
import {EntityWithIdentity} from "./EntityWithIdentity";

@Entity({name: "User"})
export class User extends EntityWithIdentity {

  @Column({type: "varchar", nullable: false})
  email: string;

  @Column({type: "varchar", length: 110, nullable: false})
  username: string;

  @Column({type: "varchar", nullable: false})
  password: string;

  @Column({type: "varchar", name: "name", nullable: false})
  name: string;

  @Column({type: "integer", name: "roleId", nullable: false})
  roleId: number;
}