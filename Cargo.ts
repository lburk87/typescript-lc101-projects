import { Payload } from "./Payload";

export class Cargo implements Payload {
    massKg: number;
    material: string;
    constructor() {
        this.massKg = 0;
        this.material = "";
    }
}
