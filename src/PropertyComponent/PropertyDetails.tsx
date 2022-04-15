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
                <p>Adresse : {property.address}</p>
                <p>Taille : {property.size}</p>
                <p>Description : {property.description}</p>
                <p>Nombre de pièces : {property.rooms}</p>
                {buttonSell}
            </div>
        );
    }
}

export default PropertyDetails;