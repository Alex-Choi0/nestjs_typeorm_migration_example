// db/migrations/1681509028295-AddName.ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddName1681509028295 implements MigrationInterface {
  name = 'AddName1681509028295';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // migration:generate로 자동 생성 쿼리문 대신 직접 name컬럼이 추가되는 쿼리문 작성
    await queryRunner.query(
      `ALTER TABLE users ADD COLUMN name character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // migration:revert도 자동생성 쿼리문 대신 직접 작성
    await queryRunner.query(`ALTER TABLE users DROP COLUMN name`);
  }
}
