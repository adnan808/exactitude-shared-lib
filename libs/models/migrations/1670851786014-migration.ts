import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1670851786014 implements MigrationInterface {
    name = 'migration1670851786014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`sub\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD UNIQUE INDEX \`IDX_2ca016813ffcce3392b3eb8ed0\` (\`sub\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP INDEX \`IDX_2ca016813ffcce3392b3eb8ed0\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`sub\``);
    }

}
