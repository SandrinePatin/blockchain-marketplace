import React from "react";
import { connectEth, createSale, createProperty } from '../ABI/ContractController';
import Property from '../models/Property';

class NewProperty extends React.Component<any, any> {
    
    render(){
        return(
            <div className="container-fluid">

                <form className="col-6"   onSubmit={(e: React.SyntheticEvent) => {
                    e.preventDefault();
                    const target = e.target as typeof e.target & {
                        address: { value: string };
                        size: { value: number };
                        description: { value: string };
                        rooms: { value: number };
                    };
                    const address = target.address.value;
                    const size = target.size.value;
                    const description = target.description.value;
                    const rooms = target.rooms.value;
                    let property = new Property(address,size,description,rooms,"");
                    createSale(property)
                    .then((status: any) => {
                        console.log('CREATE SALE RESULT', status);
                    });
                }}>
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label col-3">Adresse de la propriété</label>
                        <input type="text" className="form-control col-9" id="address"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputSize" className="form-label ">Taille (m2)</label>
                        <input type="number" className="form-control" id="size"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRooms" className="form-label">Nombre de pièces</label>
                        <input type="number" className="form-control" id="rooms"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Créer</button>
                </form>
            </div>
        );
    };
}

export default NewProperty;