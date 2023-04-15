// db/migrations/1681509937804-DeleteName.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class DeleteName1681509937804 implements MigrationInterface {
  name = 'DeleteName1681509937804';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "name"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "name" character varying NOT NULL`,
    );
  }
}
