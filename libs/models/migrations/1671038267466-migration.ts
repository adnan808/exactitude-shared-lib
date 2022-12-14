import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1671038267466 implements MigrationInterface {
    name = 'migration1671038267466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`profiles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`resource_id\` varchar(255) NOT NULL, \`is_deleted\` tinyint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime NOT NULL, \`city\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`postal_code\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`nationality\` varchar(255) NOT NULL, \`passport_number\` varchar(255) NOT NULL, \`tax_id\` varchar(255) NOT NULL, \`kyc\` int NOT NULL, \`user_id\` int NOT NULL, UNIQUE INDEX \`IDX_6293652051e0d277eeba767e87\` (\`resource_id\`), UNIQUE INDEX \`REL_9e432b7df0d182f8d292902d1a\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` int NOT NULL AUTO_INCREMENT, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`resource_id\` varchar(255) NOT NULL, \`is_deleted\` tinyint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime NOT NULL, \`sub\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`firstname\` varchar(255) NOT NULL, \`lastname\` varchar(255) NOT NULL, \`login_attempts\` tinyint NOT NULL DEFAULT '0', \`last_login_at\` datetime NULL, \`is_test_user\` tinyint NOT NULL DEFAULT 0, \`referral_token\` varchar(255) NULL, \`is_active\` tinyint NOT NULL DEFAULT 1, UNIQUE INDEX \`IDX_4a559911dbcd6c035c1cd96463\` (\`resource_id\`), UNIQUE INDEX \`IDX_2ca016813ffcce3392b3eb8ed0\` (\`sub\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`investors\` (\`id\` int NOT NULL AUTO_INCREMENT, \`resource_id\` varchar(255) NOT NULL, \`is_deleted\` tinyint NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime NOT NULL, \`type\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, UNIQUE INDEX \`IDX_e97698d9bc7aba5133367c63ae\` (\`resource_id\`), UNIQUE INDEX \`REL_d7331f945166b6fe04f9b9c5d9\` (\`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users_roles_roles\` (\`usersId\` int NOT NULL, \`rolesId\` int NOT NULL, INDEX \`IDX_df951a64f09865171d2d7a502b\` (\`usersId\`), INDEX \`IDX_b2f0366aa9349789527e0c36d9\` (\`rolesId\`), PRIMARY KEY (\`usersId\`, \`rolesId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`profiles\` ADD CONSTRAINT \`FK_9e432b7df0d182f8d292902d1a2\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`investors\` ADD CONSTRAINT \`FK_d7331f945166b6fe04f9b9c5d91\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`users_roles_roles\` ADD CONSTRAINT \`FK_df951a64f09865171d2d7a502b1\` FOREIGN KEY (\`usersId\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`users_roles_roles\` ADD CONSTRAINT \`FK_b2f0366aa9349789527e0c36d97\` FOREIGN KEY (\`rolesId\`) REFERENCES \`roles\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users_roles_roles\` DROP FOREIGN KEY \`FK_b2f0366aa9349789527e0c36d97\``);
        await queryRunner.query(`ALTER TABLE \`users_roles_roles\` DROP FOREIGN KEY \`FK_df951a64f09865171d2d7a502b1\``);
        await queryRunner.query(`ALTER TABLE \`investors\` DROP FOREIGN KEY \`FK_d7331f945166b6fe04f9b9c5d91\``);
        await queryRunner.query(`ALTER TABLE \`profiles\` DROP FOREIGN KEY \`FK_9e432b7df0d182f8d292902d1a2\``);
        await queryRunner.query(`DROP INDEX \`IDX_b2f0366aa9349789527e0c36d9\` ON \`users_roles_roles\``);
        await queryRunner.query(`DROP INDEX \`IDX_df951a64f09865171d2d7a502b\` ON \`users_roles_roles\``);
        await queryRunner.query(`DROP TABLE \`users_roles_roles\``);
        await queryRunner.query(`DROP INDEX \`REL_d7331f945166b6fe04f9b9c5d9\` ON \`investors\``);
        await queryRunner.query(`DROP INDEX \`IDX_e97698d9bc7aba5133367c63ae\` ON \`investors\``);
        await queryRunner.query(`DROP TABLE \`investors\``);
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_2ca016813ffcce3392b3eb8ed0\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_4a559911dbcd6c035c1cd96463\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_648e3f5447f725579d7d4ffdfb\` ON \`roles\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP INDEX \`REL_9e432b7df0d182f8d292902d1a\` ON \`profiles\``);
        await queryRunner.query(`DROP INDEX \`IDX_6293652051e0d277eeba767e87\` ON \`profiles\``);
        await queryRunner.query(`DROP TABLE \`profiles\``);
    }

}
