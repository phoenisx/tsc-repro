import {
  createConnection,
  getConnectionOptions,
  ConnectionOptions,
} from 'typeorm';

export const initDB = async () => {
  const connectionOptions = await getConnectionOptions();
  return createConnection({
    ...connectionOptions,
    url: process.env.DATABASE_URL || "",
  } as ConnectionOptions);
};
