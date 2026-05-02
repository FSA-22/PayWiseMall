import { DATABASE_URL } from '../config/env';
import { prisma } from '../lib';

export const connectToDB = async () => {
  try {
    await prisma.$connect();
    console.log({
      'DB Connected to DB': DATABASE_URL,
    });
  } catch (error) {
    console.log({
      'DB error Connecting to DB': DATABASE_URL,
      error,
    });
    process.exit(1);
  }
};

export const disConnectFromDB = async () => {
  await prisma.$disconnect();
};
