import { drizzle } from 'drizzle-orm/neon-http';
import * as dotenv from 'dotenv'

dotenv.config({path: 'apps/api/.env'})


if (!process.env.DB_URL) {
    throw Error('A variavel de ambiente para o banco de dados não pode ser encontrada! ')
}

const db = drizzle(process.env.DB_URL)

console.log(db)