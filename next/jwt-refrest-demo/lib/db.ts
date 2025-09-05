import {
    PrismaClient
} from '@prisma/client'
// 不直接和数据库打交道
// 用prisma
export const prisma = new PrismaClient(); 
