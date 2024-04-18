"use strict";
// prisma.js
let prisma;
function initializePrisma() {
    if (!prisma) {
        prisma = require('@prisma/client').PrismaClient;
    }
    return prisma;
}
module.exports = initializePrisma;
