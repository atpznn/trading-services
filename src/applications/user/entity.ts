import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

export enum Side {
    BUY = 'BUY',
    SELL = 'SELL',
}

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string

    @Column({ type: 'varchar' })
    name: string

    @Column({ type: 'varchar' })
    lastname: Side

    @Column()
    email: string

    @Column()
    phone: number

    @Column()
    info: string

    @Column()
    walletName: string
}
