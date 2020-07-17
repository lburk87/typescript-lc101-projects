import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
export class Rocket {
    name: string;
    totalCapacityKg: number
    cargoItems: Payload[]; 
    astronauts: Payload[];
    constructor(a: string,b: number) {
        this.name = a;
        this.totalCapacityKg = b;
    }
    sumMass( items: Payload[] ): number {
        let mass: number = 0;
        for (let i=0; i < items.length; i++) {
            mass = mass + items[i].massKg;
        }
        return mass;
    }    
    currentMassKg(): number {
        let astroMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        let currentMass: number = astroMass + cargoMass;
        return currentMass;
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
    } 
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
    }
}

     

 