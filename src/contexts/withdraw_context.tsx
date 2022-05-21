import { AxiosResponse } from "axios"
import React, { createContext, useEffect, useState } from "react"
import { nomics_api, UnmineableResponseInterface, unmineable_api } from "../services/axios"

export const WithdrawContext = createContext(
    {} as {
        coins: CoinsWithdrawInterface[],
        address: string,
        balance: number,
        balancePerDay: number,
        balanceCurrency: string
    }
)

const WithdrawProvider: React.FC = ({ children }) => {

    //TODO:Adicionar
    const [coins, setCoins] = useState<CoinsWithdrawInterface[]>([{ name: 'SOL', balance: 0.0, balancePerDay: 0.0, uuid: 'dc46e17f-5025-46fc-a576-bd82faffa63f' }])//TODO: Adicionar moedas de forma dinâmica
    const [address, setAddress] = useState<string>('')//TODO: Adicionar carteira
    const [balanceCurrency, setBalanceCurrency] = useState<string>('BRL')

    const [balance, setBalance] = useState<number>(0.0)
    const [balancePerDay, setBalancePerDay] = useState<number>(0.0)

    useEffect(() => {

        loadBalances();

    }, [])

    async function loadBalances() {

        const addressCoinsResponse = await Promise.all(
            coins.map(item => unmineable_api.get<UnmineableResponseInterface<{ balance: number, uuid: string }>>(`address/${address}?coin=${item.name}`))
        );

        const coinsMarket = await nomics_api.get<CoinsMarketResponseInterface>('currencies-ticker', {
            params: {
                filter: 'any',
                'include-fiat': true,
                interval: '1d',
                'quote-currency': balanceCurrency,
                symbols: coins.map(item => item.name).join()
            }
        })

        addressCoinsResponse.forEach((element, index: number) => {

            if (element.data.success) {

                coins[index].balance = element.data.data.balance
                coins[index].uuid = element.data.data.uuid

                setCoins(coins)
            }
        });

        await attachBalancePerDay()

        calculateBalances(coinsMarket)

    }

    async function attachBalancePerDay() {
        const statsCoinsReponse = await Promise.all(
            coins.map(item => unmineable_api.get<UnmineableResponseInterface<{ rewarded: { past_24h: number } }>>(`account/${item.uuid}/stats`))
        );


        statsCoinsReponse.forEach((element, index: number) => {
            if (element.data.success) {
                coins[index].balancePerDay = element.data.data.rewarded.past_24h

                setCoins(coins)
            }
        });
    }

    function calculateBalances(coinsMarket: AxiosResponse<CoinsMarketResponseInterface, any>) {
        let calcBalance = 0.0
        let calcBalancePerDay = 0.0

        coins.forEach(element => {

            const coinMarket = coinsMarket.data.items.find(item => item.currency === element.name);

            if (!coinMarket) {
                //TODO: DO SOME ACTION
                console.log('not found coin')
                return;
            }

            calcBalance += element.balance * coinMarket.price
            calcBalancePerDay += element.balancePerDay * coinMarket.price
        });

        setBalance(calcBalance)
        setBalancePerDay(calcBalancePerDay)
    }


    return (
        <WithdrawContext.Provider value={{ coins, address, balance, balancePerDay, balanceCurrency }}>{children}
        </WithdrawContext.Provider>
    )
}

export default WithdrawProvider


interface CoinsWithdrawInterface {
    name: string,
    balance: number,
    balancePerDay: number,
    uuid: string
}

interface CoinsMarketResponseInterface {
    items: {
        currency: string
        name: string
        logo_url: string
        price: number
    }[]
}