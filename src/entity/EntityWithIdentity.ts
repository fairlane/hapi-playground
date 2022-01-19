import {PrimaryGeneratedColumn} from "typeorm";

export abstract class EntityWithIdentity {
  @PrimaryGeneratedColumn()
  id: number;
}