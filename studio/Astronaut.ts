import { Payload } from "./Payload";

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor(a: number, b: string) {
        this.massKg = a;
        this.name = b;
    }
}