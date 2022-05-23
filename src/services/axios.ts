import axios from "axios";

const unmineable_api = axios.create({
    baseURL: "https://api.unminable.com/v4/",
})

unmineable_api.interceptors.response.use(
    (response) => { return response },
    async (error): Promise<{ message: string; error: any; statusCode: number }> => {

        console.log('UNMINEABLE =:', error)
        return Promise.reject(error)
    }
)

const nomics_api = axios.create({
    baseURL: "https://nomics.com/data/",
})

nomics_api.interceptors.response.use(
    (response) => { return response },
    async (error): Promise<{ message: string; error: any; statusCode: number }> => {
        console.log('NOMICS =:', error)
        return Promise.reject(error)
    }
)


export interface UnmineableResponseInterface<T> {
    success: boolean,
    msg: string,
    data: T
}


export { nomics_api, unmineable_api }
//currencies-ticker?filter=any&include-fiat=true&interval=1d&quote-currency=BRL&symbols=SOL