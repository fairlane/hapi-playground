import {MigrationInterface, QueryRunner} from "typeorm";

export class UserPasswordAndTelephone1642234089411 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`    
            ALTER TABLE "appuser" 
                ADD COLUMN "password" varchar, 
                ADD COLUMN "phone_number" varchar
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`    
            ALTER TABLE "appuser" 
                DROP COLUMN "password", 
                DROP COLUMN "phone_number"
        `);
    }

}
