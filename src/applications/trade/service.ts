import { BinanceSystemService } from "../binance"

function tradingSystemService(binanceService: BinanceSystemService) {
    return {
        getAllSymbol: async () => {
            const symbols = await binanceService.getAllSymbol()
            return symbols
        },
        getDetailSymbol: async (symbol: string) => {
            const symbolDetail = await binanceService.getDetailSymbol(symbol)
            return symbolDetail
        }
    }
}
export type TradingSystemService = ReturnType<typeof tradingSystemService>
export default tradingSystemService