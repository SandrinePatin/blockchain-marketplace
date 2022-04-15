import React, { useState }  from 'react';
import Property from "../models/Property";
import Sale from '../models/Sale';
import PropertyComponent from "../PropertyComponent/PropertyComponent";

class SalesList extends React.Component<any, {}> {


    render(){
        let sales = Array<Sale>();

        let property = new Property("ici1",23,"Description",1,"randompeople");
        sales[0] = new Sale(1200,"eeee","12/12/2032",property);
        let property1 = new Property("ici2",43,"Description",3,this.props.myaddr);
        sales[1] = new Sale(5000,"eeee","12/12/2032",property1);
        let property2 = new Property("ici3",23,"Description",2,"randompeople2");
        sales[2] = new Sale(7500,"eeee","12/12/2032",property2);

        return (
            <div className="container-fluid">
                <div className="row grid gap-3">
                {sales && sales.map(sale =>
                    <PropertyComponent data={sale} myaddr={this.props.myaddr} />
                )}
                </div>
            </div>
        );
    }
}

export default SalesList;