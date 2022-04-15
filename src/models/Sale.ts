import Property from "./Property";

class Sale{
    price : number;
    sellerId: string;
    saleDate: string;
    propertyId: number;

    constructor(price: number, sellerId: string, saleDate: string, propertyId: number) {
        this.price = price;
        this.sellerId = sellerId;
        this.saleDate = saleDate;
        this.propertyId = propertyId;
    }
}

export default Sale;