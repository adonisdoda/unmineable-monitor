import axios from "axios";

const unmineable_api = axios.create({
    baseURL: "https://api.unminable.com/v4/",
})


const nomics_api = axios.create({
    baseURL: "https://nomics.com/data/",
})


unmineable_api.interceptors.response.use(
    (response: any) => { return response }, (error) => {
        console.log(error)
    }
)


nomics_api.interceptors.response.use(
    (response: any) => { return response }, (error) => {
        console.log(error)
    }
)

export interface UnmineableResponseInterface<T> {
    success: boolean,
    msg: string,
    data: T
}

export { nomics_api, unmineable_api }
//currencies-ticker?filter=any&include-fiat=true&interval=1d&quote-currency=BRL&symbols=SOL