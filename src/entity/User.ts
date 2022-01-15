import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "appuser"})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", length: 110, nullable: false})
  username: string;

  @Column({type: "varchar", name: "full_name", nullable: false})
  fullName: string;

  @Column({type: "varchar", name: "phone_number", nullable: true})
  phoneNumber: string;

  @Column({type: "varchar", nullable: false})
  password: string;
}