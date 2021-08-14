import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config: PostgresConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "toor",
  database: "nestjs_ecom",
  entities: ["dist/src/**/*.entity.js"],
  synchronize: true,
  migrations: ["dist/src/db/migrations/*.js"],
  cli: { migrationsDir: "src/db/migrations" }
};

export default config;
