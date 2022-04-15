import React, { useState }  from 'react';
import Property from "../models/Property";
import Sale from '../models/Sale';
import PropertyComponent from "../PropertyComponent/PropertyComponent";
import {connectEth, fetchProperties, fetchSales} from '../ABI/ContractController';

class SalesList extends React.Component<any, {}> {

    addressUser: string = "";
    sales = Array<Sale>();

    constructor(props: any) {
        super(props);
        this.getSale();
    }

    getSale(){
        connectEth()
            .then(async (result) => {
                this.addressUser = result.account[0];

                fetchSales()
                    .then(async (result) => {
                        for(let i = 0; i < result.length; i++){
                            this.sales[i] = new Sale(result[i].price, result[i].sellerId, result[i].saleDate, result[i].propertyId)
                        }
                        this.setState(this.sales)

                        console.log(result);
                    })
                    .catch(err => {
                        console.error(err.message);
                    });
            })
            .catch(err => {
                console.error(err.message);
            });
    }


    render(){
        return (
            <div className="container-fluid">
                <div className="row grid gap-3">
                {this.sales && this.sales.map(sale =>
                    <PropertyComponent data={sale} myaddr={this.addressUser} />
                )}
                </div>
            </div>
        );
    }
}

export default SalesList;