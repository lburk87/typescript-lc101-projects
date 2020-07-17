import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor(a: number, b?: string) {
        this.massKg = a;
        this.material = b;
    }
}