import "reflect-metadata"
import { DataSource } from "typeorm"
import { Transaction } from "./applications/transaction/entity"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./data/db.sqlite",
    synchronize: true,
    logging: true,
    entities: [Transaction],
})
