import {Payload} from './Payload';
export class Rocket {
    name: string;
    totalCapacityKg: number
    cargoItems: [];
    astronauts: [];
    constructor() {
        this.name = "";
        this.totalCapacityKg = 0;
    }
    sumMass( items: Payload[] ): number {
        let mass: number = 0;
        let payload: [] = Payload.massKg;
        for (let i=0; i < payload.length; i++) {
            mass = mass + payload[i].massKg;
    }
    return mass;
}
    currentMassKg(): number {
        let astroMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        let currentMass: number = astroMass + cargoMass;
        return currentMass;
    }
}

 