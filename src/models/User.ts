import { prisma } from './prisma';
import bcrypt from 'bcrypt';

export interface UserDocument {
  id?: number ;
  username: string;
  email: string;
  password: string;
  role: string;
}

export const createUser = async (data: UserDocument) => {
  return await prisma.user.create({ data });
};

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({ where: { email } });
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};