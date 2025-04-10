import Elysia from "elysia";
import { TradingSystemService } from "./service";


interface Order {
    status: 'PENDING' | 'FILLED' | 'CANCELED' | 'SUCCESS'
    orderId: string
    symbol: string
    side: 'BUY' | 'SELL'
    price: number
    quantity: number
    createdAt: Date
    onwerId: string
}
export default function tradingSystemController(service: TradingSystemService) {
    const controller = 'trade'
    return (app: Elysia,) => {
        app.get(`/${controller}/get-symbols`, () => service.getAllSymbol())
        app.get(`/${controller}/get-symbol/:symbol`, ({ params: { symbol } }) => service.getDetailSymbol(symbol))
        app.post(`/${controller}/create-order`, () => { })
        app.post(`/${controller}/get-order/:orderId`, ({ params: { orderId } }) => { })
        app.post(`/${controller}/place-order/:orderId`, ({ params: { orderId } }) => { })
        app.post(`/${controller}/close-order/:orderId`, ({ params: { orderId } }) => { })
        app.post(`/${controller}/cancle-order/:orderId`, ({ params: { orderId } }) => { })

        return app
    }
}
export type TradingSystemController = ReturnType<typeof tradingSystemController>;