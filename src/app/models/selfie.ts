import { Wookie } from "./wookie";

export class Selfie {
    image! : string ;
    wookie: Wookie ;
    titre!: string;

    /**
     *
     */
    constructor() {
        this.wookie = new Wookie();
    }
}
