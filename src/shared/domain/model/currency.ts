
type UpperCaseLetter = | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'| 'H' | 'I' | 'J' | 'K';

export type CurrencyCode = `${UpperCaseLetter}${UpperCaseLetter}${UpperCaseLetter}`;

export class Currency {
    private readonly _code: CurrencyCode;

    /**
     * Creates a new Currency instance.
     * @param {CurrencyCode} code - A three-letter uppercase currency code (e.g., 'USD','EUR')
     * @param code
     */

    constructor(code: CurrencyCode) {
        this._code = code;
    }

    public get code(): string {
        return this._code;
    }

    public formAmount = (amount: number, locale: string = 'en-US'): string => {
        return amount.toLocaleString(locale, {
            style: 'currency',
            currency: this._code,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
    }

    public toString = () : string=> this._code;

}