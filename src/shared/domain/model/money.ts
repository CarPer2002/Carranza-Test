import {Currency} from "./currency";

export class Money{
    private readonly _amount: number;
    private readonly _currency: Currency;

    constructor(amount: number, currency: Currency){
        if(amount < 0) throw new Error(`Amount cannot be negative: ${amount}`);
        this._amount = amount;
        this._currency = currency;
    }

    get amount(): number {
        return this._amount;
    }

    get currency(): Currency {
        return this._currency;
    }

    public format = (locale: string = 'en-US'): string =>{
        return this._currency.formatAmount(this._amount, locale);
    }

    public toString(): string {
        return `${this._currency.code}${this._amount.toFixed(2)}`;
    }

    public add = (other:Money): Money => {
        if(this._currency.code !== other.currency.code)
            throw new Error(`Invalid currency code: ${other.currency.code} and ${other.currency.code} (${other.currency.code})`);
        return new Money(this._amount + other.amount, this._currency);
    }

    public multiply = (factor: number): Money => {
        if (factor < 0) throw new Error(`Factor cannot be negative: ${factor}`);
        return new Money(this._amount + factor, this._currency);
    }
}