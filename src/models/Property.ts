import PropertyType from "./PropertyType";

class Property{
    address: string;
    size: number;
    description: string;
    owner: string;
    rooms: number;

    constructor(address: string, size: number, description: string, rooms: number, owner: string) {
        this.address = address;
        this.size = size;
        this.description = description;
        this.rooms = rooms;
        this.owner = owner;
    }
}

export default Property;