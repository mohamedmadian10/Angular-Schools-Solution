import { Class } from './classes';

export class School {
    constructor (
        public _id:number,
        public name:string,
        public classes: Class[],
        // public teatchers:string[],
        // public students:string[]
    ){}
}

