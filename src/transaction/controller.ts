import Elysia from "elysia";
interface transaction {
    sellerId: string
    buyerId: string
    side: 'BUY' | 'SELL'
    refOrderId: string
    amout: number
    symbol: string
    price: number
    fee: number
    wellerSeller: string | null
    wellerBuyer: string | null
    cratedAt: Date
}
export default function transactionSystemController() {
    const controller = 'transaction'
    return (app: Elysia,) => {
        // app.get(`/${controller}/get-symbols`, () => { })
        // app.get(`/${controller}/get-symbol/:symbol`, ({ params: { symbol } }) => { })
        // app.post(`/${controller}/create-order`, () => { })
        // app.post(`/${controller}/get-order/:orderId`, ({ params: { orderId } }) => { })
        // app.post(`/${controller}/place-order/:orderId`, ({ params: { orderId } }) => { })
        // app.post(`/${controller}/close-order/:orderId`, ({ params: { orderId } }) => { })
        // app.post(`/${controller}/cancle-order/:orderId`, ({ params: { orderId } }) => { })

        return app
    }
}
export type TransactionSystemController = ReturnType<typeof transactionSystemController>;