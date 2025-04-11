// import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

// export enum Side {
//     BUY = 'BUY',
//     SELL = 'SELL',
// }

// @Entity('transaction')
// export class Transaction {
//     @PrimaryGeneratedColumn('uuid')
//     sellerId: string

//     @Column({ type: 'varchar' })
//     buyerId: string

//     @Column({ type: 'varchar' })
//     side: Side

//     @Column()
//     refOrderId: string

//     @Column()
//     amount: number

//     @Column()
//     symbol: string

//     @Column()
//     price: number

//     @Column()
//     fee: number

//     @Column({ nullable: true })
//     walletSeller: string | null

//     @Column({ nullable: true })
//     walletBuyer: string | null

//     @Column()
//     createdAt: Date
// }

import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("transaction")
export class Transaction {
    @PrimaryColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    type: "DEPOSIT" | "TRANSFER_TO_HOT" | "WITHDRAW";

    @Column()
    symbol: string;

    @Column("float")
    amount: number;

    @Column()
    status: "PENDING" | "CONFIRMED" | "FAILED";

    @Column({ type: "datetime" })
    createdAt: Date;
}
