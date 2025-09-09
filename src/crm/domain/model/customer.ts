// Customer (_id: string, _name: string, _lastOrderPrice: Money)

import {Money} from "../../../shared/domain/model/money";

export class Customer {

    private readonly _id: string;
    private readonly _name: string;
    private _lastOrderPrice: Money | null;

    constructor(name: string){
        if(!name || name.trim().length === 0) throw new Error("Missing name");
        this._id = crypto.randomUUID();
        this._name = name;
        this._lastOrderPrice = null;
    }

    get id(): string {
        return this._id;
    }

    get name(): string{
        return this._name;
    }

    get lastOrderPrice(): Money | null{
        return this._lastOrderPrice;
    }

    set lastOrderPrice(value: Money)  {
        this._lastOrderPrice = value;
    }

}