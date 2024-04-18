// prisma.js
let prisma: any;

function initializePrisma() {
  if (!prisma) {
    prisma = require('@prisma/client').PrismaClient;
  }
  return prisma;
}

module.exports = initializePrisma;