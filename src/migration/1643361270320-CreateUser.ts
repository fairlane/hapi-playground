import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1643361270320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`    
            CREATE TABLE "appuser" 
            full_name    varchar,
            password     varchar,
            phone_number varchar,
            id           serial
            constraint "PK_c0ea1431a16d932bbf6d689a37e"
            primary key,
            username     varchar(110)
         `);        
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "appuser" `);
    }

}
