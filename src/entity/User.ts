import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "appuser"})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar", length: 110, nullable: true})
  username: string;

  @Column({type: "varchar", name: "full_name", nullable: true})
  fullName: string;
}