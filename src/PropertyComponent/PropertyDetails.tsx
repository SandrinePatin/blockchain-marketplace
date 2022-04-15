import React from "react";

class PropertyDetails extends React.Component<any, any> {
    sellProperty(){
        console.log("A VENDRE");
    }

    render(){
        let property = this.props.property;
        let buttonSell = null;
        if(property.owner == this.props.myaddr){
            buttonSell=(<button className="btn btn-outline-success" onClick={this.sellProperty}>Mettre en vente</button>)
        }
        return (
            <div>
                <div>Adresse : {property.address}</div>
                <div>Taille : {property.size}</div>
                <div>Description : {property.description}</div>
                <div>Nombre de pièces : {property.rooms}</div>
                {buttonSell}
            </div>
        );
    }
}

export default PropertyDetails;