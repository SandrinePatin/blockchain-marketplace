import React from 'react';
import './PropertyComponent.css';
import Property from "../models/Property";
import PropertyDetails from "./PropertyDetails";


class PropertyComponent extends React.Component<{data: any, myaddr: string}, { [key: string]: any}>{
    state = {showPopup: false};
    constructor(props: any) {
        super(props);
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }

    closePopupHandler = () => {
        this.setState({showPopup: false});
    }

    openClosePopupHandler = () => {
        if(this.state.showPopup == true){
            this.closePopupHandler();
        } else {
            this.openPopupHandler();
        }
    }

    render(){
        let data = this.props.data
        let popup = null;
        if(this.state.showPopup) {
            popup = (<PropertyDetails property={data.propertyId} myaddr={this.props.myaddr}/>);

        }
        return (
            <div className="card col-md-2 mt-1 ms-sm-2" >
                <div className="card-body">
                    <h5 className="card-title">{data.propertyId.address}</h5>
                    <p>Price : {data.price}</p>
                    <p>Date : {data.saleDate}</p>
                    {popup}
                    <div>
                        <button className="btn btn-outline-info" onClick={this.openClosePopupHandler}>Voir les détails </button>
                    </div>
                </div>
            </div>
        );
    };
}

export default PropertyComponent;