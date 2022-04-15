import React from 'react';
import './PropertyComponent.css';
import Property from "../models/Property";
import PropertyDetailsPopup from "./PropertyDetailsPopup";
import { connectEth } from '../ABI/ContractController';

class PropertyComponent extends React.Component<{data: any}, { [key: string]: any}>{
    state = {showPopup: false};
    contract: any = null;
    constructor(props: any) {
        super(props);
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }

    closePopupHandler = () => {
        this.setState({showPopup: false});
    }

    buyMe = () => {
        if (this.contract !== null) {
            console.log('BOUGHT');
        }
    }

    render(){
        let data = this.props.data
        let popup = null;
        if(this.state.showPopup) {
            popup = (<PropertyDetailsPopup message={data.propertyId} closeMe={this.closePopupHandler} buyMe={this.buyMe}/>);
        }
        connectEth()
        .then(result => {
            this.contract = result.contract;
        })
        .catch(err => {
            console.error(err.message);
        });

        return (
            <div className="card col-md-3 m-1" >
                <div className="card-body">
                    <h5 className="card-title">{data.propertyId.address}</h5>
                    <p>Price : {data.price}</p>
                    <p>Date : {data.saleDate}</p>
                    <div>
                        <button className="btn btn-outline-info" onClick={this.openPopupHandler}>Voir les détails </button>
                        {popup}
                    </div>
                </div>
            </div>
        );
    };
}

export default PropertyComponent;