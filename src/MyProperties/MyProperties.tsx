import React from "react";
import Property from "../models/Property";
import PropertyDetails from "../PropertyComponent/PropertyDetails";
import {connectEth, fetchProperties} from "../ABI/ContractController";

class MyProperties extends React.Component<any, any>{
    addressUser: string = "";
    properties = Array<Property>();

    constructor(props: any) {
        super(props);
        this.getProperties();
    }

    getProperties(){
        connectEth()
            .then(async (result) => {
                this.addressUser = result.account[0];

                fetchProperties()
                    .then(async (result) => {
                        for(let i = 0; i < result.length; i++){
                            this.properties[i] = new Property(result[i].localisation, result[i].area, result[i].description, result[i].rooms,result[i].owner)
                        }
                        this.setState(this.properties)

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
                <div className="row">

                    {this.properties && this.properties.map(oneproperty =>
                        <div className="card col-md-2 mt-1 ms-sm-2" >
                            <div className="card-body">
                                <PropertyDetails property={oneproperty} myaddr={this.addressUser}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default MyProperties;