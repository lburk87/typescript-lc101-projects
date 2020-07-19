import {Payload} from './Payload';
import {Cargo} from './Cargo';
import {Astronaut} from './Astronaut';
import {cargo} from './index';
import {astronauts} from './index';
export class Rocket {
    name: string;
    totalCapacityKg: number
    cargoItems: Payload[] = cargo;
    astronauts: Payload[] = astronauts;
    constructor(a: string,b: number) {
        this.name = a;
        this.totalCapacityKg = b;
    }
    sumMass( items: Payload[] ): number {
        let itemsArray: Payload[] = items;       
        let mass: number = 0;
        for (let i=0; i < itemsArray.length; i++) {
            let item = itemsArray[i];
            mass = mass + item.massKg;
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
        } else 
        return false;
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else
        return false;
    } 
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else
        return false;
    }
}

     

 