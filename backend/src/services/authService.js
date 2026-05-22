const prisma = require('../config/db');
const bcrypt = require('bcryptjs');

exports.createUser = async ({ name, email, password }) => {
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });
};

exports.findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email }
  });
};