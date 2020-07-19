import { Payload } from "./Payload";
import {Astronaut} from './Astronaut';
import {cargo} from './index';
import {astronauts} from './index';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(a: number, b?: string) {
        this.massKg = a;
        this.material = b;
    }
}