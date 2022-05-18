console.log("start serve successfully");

function add(n1:number, n2:number): number{
    console.log(typeof n1 === 'number')
    return n1 + n2;
}
console.log(add(2,5))

//object 
const person: {
    name: string,
    age: number,
    number: number,
} = {
    name: "chinonso",
    age: 15,
    number: 78
}

let arr: string[];
arr = ["string"];

//tuples

const person1: {
    name: string,
    age: number,
    number: number,
    role?: [number, string], //tuples
} = {
    name: "chinonso",
    age: 15,
    number: 78
}
//enum
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

// add change the identifiers if you don't want to use the equal sign to reassign
enum Role2 {
    ADMIN =3,
    READ_ONLY,
    AUTHOR,
}

const person2: {
    name: string,
    age: number,
    number: number,
    role?: Role //tuples
} = {
    name: "chinonso",
    age: 15,
    number: 78
}

///unnions

let names: string | boolean;
names = "chinonso"

function sub(input: number|boolean, input2: number){
    if (typeof input === 'number'){
        return input+input2
    }
    
}

// type alias

type Combineable = number | string;


//never is used for functioon that never return anything and for infiniter loop
function generateError(message: string, code: number): never{
    throw{
        message: message,
         errorCode: code
    }
}
generateError('An error occured',500)