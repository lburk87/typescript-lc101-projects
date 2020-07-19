import { Payload } from "./Payload";
import {Cargo} from './Cargo';
import {cargo} from './index';
import {astronauts} from './index';

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(a: number, b: string) {
        this.massKg = a;
        this.name = b;
    }
}