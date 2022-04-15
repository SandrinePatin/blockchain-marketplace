import React from "react";

class NewProperty extends React.Component<any, any> {

    render(){
        return(
            <div className="container-fluid">
                <div className="col-3"></div>
                <form className="col-6">
                    <div className="mb-3">
                        <label htmlFor="inputAddress" className="form-label col-3">Adresse de la propriété</label>
                        <input type="text" className="form-control col-9" id="inputAddress"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputSize" className="form-label ">Taille (m2)</label>
                        <input type="number" className="form-control" id="inputSize"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputDescription" className="form-label">Description</label>
                        <input type="text" className="form-control" id="inputDescription"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputRooms" className="form-label">Nombre de pièces</label>
                        <input type="number" className="form-control" id="inputRooms"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Créer</button>
                </form>
            </div>
        );
    };
}

export default NewProperty;