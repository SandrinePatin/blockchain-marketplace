import React, { useState }  from 'react';
import Property from "../models/Property";
import Sale from '../models/Sale';
import PropertyComponent from "../PropertyComponent/PropertyComponent";

class SalesList extends React.Component<{}, {}> {


    render(){
        let sales = Array<Sale>();

        let property = new Property("ici1",23,"Description",1);
        sales[0] = new Sale(1200,"eeee","12/12/2032",property);
        let property1 = new Property("ici2",43,"Description",3);
        sales[1] = new Sale(5000,"eeee","12/12/2032",property1);
        let property2 = new Property("ici3",23,"Description",2);
        sales[2] = new Sale(7500,"eeee","12/12/2032",property2);

        return (
            <div className="container">
                <div className="row">
                {sales && sales.map(sale =>
                    <PropertyComponent data={sale} />
                )}
                </div>
            </div>
        );
    }
}

export default SalesList;