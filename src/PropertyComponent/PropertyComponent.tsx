import React from 'react';
import './PropertyComponent.css';
import Property from "../models/Property";
import PropertyDetailsPopup from "./PropertyDetailsPopup";


class PropertyComponent extends React.Component<{data: any}, { [key: string]: any}>{
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

    render(){
        let data = this.props.data
        let popup = null;
        if(this.state.showPopup) {
            popup = (<PropertyDetailsPopup message={data.propertyId} closeMe={this.closePopupHandler}/>);

        }
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