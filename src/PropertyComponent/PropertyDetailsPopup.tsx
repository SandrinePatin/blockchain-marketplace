import React from "react";

class PropertyDetailsPopup extends React.Component<any, any> {
    render(){
        return (
            <div>
                <p>Adresse : {this.props.message.address}</p>
                <p>Taille : {this.props.message.size}</p>
                <p>Description : {this.props.message.description}</p>
                <p>Nombre de pièces : {this.props.message.rooms}</p>
                <button className="btn btn-outline-danger" onClick={this.props.closeMe}>Close Popup</button>
            </div>
        );
    }
}

export default PropertyDetailsPopup;