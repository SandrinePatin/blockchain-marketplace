import React from 'react';
import './PropertyComponent.css';
import { connectEth } from '../ABI/ContractController';
import PropertyDetails from "./PropertyDetails";


class PropertyComponent extends React.Component<{data: any, myaddr: string}, { [key: string]: any}> {
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

    openClosePopupHandler = () => {
        if(this.state.showPopup === true){
            this.closePopupHandler();
        } else {
            this.openPopupHandler();
        }
    }

    render(){
        let data = this.props.data
        let popup = null;
        if (this.state.showPopup) {
            popup = (<PropertyDetails property={data.propertyId} myaddr={this.props.myaddr} buyMe={this.buyMe}/>);
        }
        connectEth()
        .then(result => {
            this.contract = result.contract;
        })
        .catch(err => {
            console.error(err.message);
        });

        return (
            <div className="card col-md-2 mt-1 ms-sm-2" >
                <div className="card-body">
                    <h5 className="card-title">{data.propertyId.address}</h5>
                    <p>Price : {data.price}</p>
                    <p>Date : {data.saleDate}</p>
                    {popup}
                    <div className='btn-group'>
                        <button className="btn btn-outline-info" onClick={this.openClosePopupHandler}>Voir les détails </button>
                        <button className="btn btn-success" onClick={this.buyMe}>BuyMe !</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default PropertyComponent;