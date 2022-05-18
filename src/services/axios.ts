import axios from "axios";

export const unmineable_api = axios.create({
    baseURL: "https://api.unminable.com/v4/",
});


export interface UnmineableResponseInterface<T> {
    success: boolean,
    msg: string,
    data: T
}


export const nomics_api = axios.create({
    baseURL: "https://nomics.com/data/",
});


//currencies-ticker?filter=any&include-fiat=true&interval=1d&quote-currency=BRL&symbols=SOL