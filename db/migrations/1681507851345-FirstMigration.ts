// db/migrations/1681507851345-FirstMigration.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstMigration1681507851345 implements MigrationInterface {
  name = 'FirstMigration1681507851345'; // migration Table에서 입력되는 Record name 값

  public async up(queryRunner: QueryRunner): Promise<void> {
    // migration:run을 진행시 수행되는 쿼리문
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // migration:revert을 진행시 수행되는 쿼리문
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
