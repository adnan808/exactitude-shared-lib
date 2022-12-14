import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671040472602 implements MigrationInterface {
    name = 'migration1671040472602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`is_deleted\` \`is_deleted\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`deleted_at\` \`deleted_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`is_deleted\` \`is_deleted\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`deleted_at\` \`deleted_at\` datetime NULL`);
        await queryRunner.query(`ALTER TABLE \`investors\` CHANGE \`is_deleted\` \`is_deleted\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`investors\` CHANGE \`deleted_at\` \`deleted_at\` datetime NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`investors\` CHANGE \`deleted_at\` \`deleted_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`investors\` CHANGE \`is_deleted\` \`is_deleted\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`deleted_at\` \`deleted_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` CHANGE \`is_deleted\` \`is_deleted\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`deleted_at\` \`deleted_at\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`profiles\` CHANGE \`is_deleted\` \`is_deleted\` tinyint NOT NULL`);
    }

}
