class Property{
    localisation: string;
    area: number;
    description: string;
    owner: string;
    rooms: number;

    constructor(localisation: string, area: number, description: string, rooms: number, owner: string) {
        this.localisation = localisation;
        this.area = area;
        this.description = description;
        this.rooms = rooms;
        this.owner = owner;
    }

    from(data: any): Property | undefined {
        if (data.localisation && data.area && data.description && data.rooms && data.owner) {
            return new Property(data.localisation, data.area, data.description, data.rooms, data.owner);
        }
        return undefined;
    }
}

export default Property;