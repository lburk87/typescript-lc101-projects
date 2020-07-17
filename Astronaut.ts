import { Payload } from "./Payload";

export class Astronaut implements Payload {
    massKg: number;
    name: string;
    constructor() {
        this.massKg = 0;
        this.name = "";
    }
}