import React from "react";
import Sale from "../models/Sale";
import Property from "../models/Property";
import PropertyDetails from "../PropertyComponent/PropertyDetails";

class MyProperties extends React.Component<any, any>{
    render(){
        let sales = Array<Sale>();
        let properties = Array<Property>();

        let property = new Property("ici1",23,"Description",1,this.props.myaddr);
        sales[0] = new Sale(1200,"eeee","12/12/2032",property);
        let property1 = new Property("ici2",43,"Description",3,this.props.myaddr);
        sales[1] = new Sale(5000,"eeee","12/12/2032",property1);
        let property2 = new Property("ici3",23,"Description",2,this.props.myaddr);
        sales[2] = new Sale(7500,"eeee","12/12/2032",property2);
        let property3 = new Property("ici3",23,"Description",2,this.props.myaddr);
        sales[3] = new Sale(7500,"eeee","12/12/2032",property3);

        properties[0] = property;
        properties[1] = property1;
        properties[2] = property2;
        properties[3] = property3;


        return (
            <div className="container-fluid">
                <div className="row">

                    {properties && properties.map(oneproperty =>
                        <div className="card col-md-2 mt-1 ms-sm-2" >
                            <div className="card-body">
                                <PropertyDetails property={oneproperty} myaddr={this.props.myaddr}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default MyProperties;