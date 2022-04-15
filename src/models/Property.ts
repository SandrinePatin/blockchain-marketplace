import PropertyType from "./PropertyType";

class Property{
    address: string;
    size: number;
    description: string;
    //documents: string;
    rooms: number;
    //type: PropertyType;

    constructor(address: string, size: number, description: string, rooms: number) {
        this.address = address;
        this.size = size;
        this.description = description;
        this.rooms = rooms;
        //this.type = type;
    }
}

export default Property;