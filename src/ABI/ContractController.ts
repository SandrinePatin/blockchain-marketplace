import Web3 from "web3";
import { ABI } from '../ABI/RealEstateMP';
import Property from '../models/Property';
import Sale from '../models/Sale';

export function connectEth(): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        if ((window as any).ethereum) {
            // await (window as any).ethereum.request({ method: 'eth_requestAccounts'});
            let web3js = new Web3((window as any).web3.currentProvider);
            const abi = ABI.abi as any;
            const realEstateContract = new web3js.eth.Contract(abi, '0x4559dF36c003f50254e261321c2a5a55846aC09a');
            const account = await web3js.eth.requestAccounts();
            const address = account[0];
            console.log('ACCOUNT ADDR:', address);
            const result = {
                contract: realEstateContract,
                account: account,
            }
            resolve(result);
        } else {
            reject(new Error('Metamask connection failed.'));
        }
    });
}

export function buy(property: Property): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        connectEth()
        .then(result => {
            fetchProperties()
            .then((properties: any[]) => {
                properties.forEach(prop => {
                    if (prop === property) {
                        console.log('CURRENT PROP FOUND');
                    }
                });
            });
        })
        .catch((err: Error) => {
            console.error(err.message);
        });
    });
}

export function createSale(property: Property): Promise<void> {
    return new Promise<any>((resolve, reject) => {
        connectEth().then(async (result) => {
            createProperty(property).then(() => {
                fetchProperties().then(async (properties: any[]) => {
                    const property = properties[properties.length - 1];
                    const sale = new Sale(10, result.account[0], new Date().toUTCString(), property);
                    const saleResult = await result.contract.methods.createSale(sale.price, sale.sellerId, Date.now(), properties.length - 1).send({ from: result.account[0] });
                    resolve(saleResult);
                });
            });
        });
    });
}

export function createProperty(property: Property): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        connectEth().then(async (result) => {
            const contract = result.contract;
            console.log(result);
            const status = await contract.methods.createProperty(property.localisation, property.area, property.description, property.rooms).send({ from: result.account[0] });
            resolve(status);
        });
    });
}

export function fetchProperties(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
        connectEth().then(async (result) => {
            const contract = result.contract;
            console.log(result);
            let properties = [];
            const propertiesCount = await contract.methods.propertiesLength().call();
            for (let i = 0; i < propertiesCount; i++) {
                const property = await contract.methods.properties(i).call();
                properties.push(property);
            }
            resolve(properties);
        });
    });
}

export function fetchSales(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
        connectEth().then(async (result) => {
            const contract = result.contract;
            console.log(result);
            let sales = [];
            const salesCount = await contract.methods.salesLength().call();
            for (let i = 0; i < salesCount; i++) {
                const sale = await contract.methods.sales(i).call();
                sales.push(sale);
            }
            resolve(sales);
        });
    });
}