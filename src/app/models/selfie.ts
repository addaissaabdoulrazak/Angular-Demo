import { Wookie } from "./wookie";

export class Selfie {
    image! : string ;
    wookie: Wookie ;

    /**
     *
     */
    constructor() {
        this.wookie = new Wookie();
    }
}
