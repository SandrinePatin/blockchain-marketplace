import Property from "./Property";

class Sale{
    set sellerId(value: string) {
        this._sellerId = value;
    }
    price : number;
    private _sellerId: string;
    saleDate: string;
    propertyId: number;
    property: Property | undefined;

    constructor(price: number, sellerId: string, saleDate: string, propertyId: number) {
        this.price = price;
        this._sellerId = sellerId;
        this.saleDate = saleDate;
        this.propertyId = propertyId;
    }
}

export default Sale;