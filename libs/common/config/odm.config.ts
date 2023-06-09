import SecretsService from './secrets.service';

const secretsService = new SecretsService();
async function buildWithSecrets(odmConfig) {
  await secretsService.init();
  const dbSecrets = secretsService.getDbSecrets();
  odmConfig.host ??= dbSecrets.host;
  odmConfig.username ??= dbSecrets.username;
  odmConfig.password ??= dbSecrets.password;
  odmConfig.database ??= dbSecrets.dbname;
  console.log(
    `mongodb+srv://${odmConfig.username}:${odmConfig.password}@${odmConfig.host}/${odmConfig.database}?retryWrites=true&w=majority`,
  );
  return `mongodb+srv://${odmConfig.username}:${odmConfig.password}@${odmConfig.host}/${odmConfig.database}?retryWrites=true&w=majority`;
}

const OdmConfig = {
  host: process.env.MONGODB_HOST,
  username: process.env.MONGODB_USERNAME,
  password: process.env.MONGODB_PASSWORD,
  database: process.env.MONGODB_DBNAME,
};

export const odmConfig = buildWithSecrets(OdmConfig);
