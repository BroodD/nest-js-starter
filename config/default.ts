export default () => ({
  server: {
    port: 3000,
    baseUrl: 'http://localhost:3000',
  },
  database: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'starter',
    username: 'postgres',
    password: '1234',
    synchronize: true,
    logging: false,
  },
  accessToken: {
    secret: 'fg7f6ul5wb',
    expiresIn: '30 days',
  },
  refreshToken: {
    expireIn: [1, 'months'],
    maxCount: 5,
  },
  cache: {
    ttl: 3600,
  },
  s3: {
    endpoint: 'fra1.digitaloceanspaces.com',
    bucketName: 'starter-files',
  },
  i18n: {
    fallbackLang: 'en',
  },
});
