import { Elysia } from "elysia";
import * as trading from "./applications/trade";
import * as transaction from "./applications/transaction";
import * as binance from "./applications/binance";

export default function configElysia() {
    const app = new Elysia()

    // service zone 
    const binanceService = binance.binanceSystemService()
    const tradingService = trading.tradingSystemService(binanceService)

    // controller zone
    const tradingSystem = trading.tradingSystemController(tradingService);
    const transactionSystem = transaction.transactionController()
    return {
        getServices: {
            tradingService,
            binanceService
        },
        getControllers: {
            tradingSystem
        },
        initRoutes() {
            app
                .get("/", () => "Hello Elysia!")
                .use(tradingSystem)
                .use(transactionSystem)
            return this
        },
        startServer(port: number) {
            app.listen(port)
            return app
        }
    }
}