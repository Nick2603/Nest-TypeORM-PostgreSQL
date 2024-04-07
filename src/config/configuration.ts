const configuration = () => ({
  appPort: parseInt(process.env.APP_PORT, 10) || 3000,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: parseInt(process.env.DB_PORT, 10) || 5432,
});

export type ConfigurationType = ReturnType<typeof configuration>;

export default configuration;
