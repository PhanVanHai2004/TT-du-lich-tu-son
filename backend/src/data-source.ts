import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Map } from './map/map.entity.js';


function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Thiếu biến môi trường ${name}`);
  }

  return value;
}

export default new DataSource({
  type: 'postgres',
  host: requiredEnv('DB_HOST'),
  port: Number(requiredEnv('DB_PORT')),
  username: requiredEnv('DB_USERNAME'),
  password: requiredEnv('DB_PASSWORD'),
  database: requiredEnv('DB_DATABASE'),

  entities: [Map],
  migrations: ['dist/migrations/*.js'],

  synchronize: false,
});