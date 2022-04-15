import Web3 from "web3";
import { ABI } from '../ABI/RealEstateMP';

export function connectEth(): Promise<any> {
    return new Promise<any>(async (resolve, reject) => {
        if ((window as any).ethereum) {
            // await (window as any).ethereum.request({ method: 'eth_requestAccounts'});
            let web3js = new Web3((window as any).web3.currentProvider);
            const abi = ABI.abi as any;
            const realEstateContract = new web3js.eth.Contract(abi, '0x1fcb7574949576B602D2eeEc616587e00fD8Df9B');
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