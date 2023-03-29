import {
  GetSecretValueCommand,
  GetSecretValueCommandOutput,
  GetSecretValueCommandInput,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

export type databaseSecrets = {
  password: string;
  dbname: string;
  host: string;
  username: string;
};

export default class SecretsService {
  private readonly client: SecretsManagerClient;
  private dbSecrets?: databaseSecrets;
  constructor() {
    this.client = new SecretsManagerClient({
      region: process.env.AWS_REGION,
    });
  }
  private async getSecretValue(secretName: string) {
    const command = new GetSecretValueCommand({ SecretId: secretName });

    const secretValue = await this.client
      .send<GetSecretValueCommandInput, GetSecretValueCommandOutput>(command)
      .catch((err) => {
        throw new Error(err.message);
      });

    return secretValue.SecretString;
  }
  private async fetchDBConnectionSecrets() {
    if (this.dbSecrets) {
      return;
    }
    const dbSecret = await this.getSecretValue(process.env.DB_SECRET_ARN);
    this.dbSecrets = JSON.parse(dbSecret);
  }

  public async init() {
    await this.fetchDBConnectionSecrets();
  }

  public getDbSecrets() {
    return this.dbSecrets;
  }
}
