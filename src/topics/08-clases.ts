export class Person{
    // public name: string;
    // private address: string;

    constructor( public firstName: string, public lastName: string, public address: string = 'No address'){}

    
}

export class Hero {

    //public person: Person;

    constructor(
        
        public alterEgo:string,
        public age:number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person( realName);
    }
}


/* export class Hero extends Person{



    constructor(
        public alterEgo:string,
        public age:number,
        public realName: string
    ){
        super(realName,'New York');
    }
}
 */

const tony = new Person('Tony Stark', 'Shown','New York');
const ironman = new Hero('Iron Man',56,'Blabla',tony)


console.log(ironman)