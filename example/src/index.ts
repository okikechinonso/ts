
























let id: number = 5


let person: [number, string, boolean] = [1, 'brad',true]

enum Dir{
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Dir.Down)

//creating types

type User = {
    id: number
    name: string
}

//creating object 

const user: User={
    id : 1,
    name: 'John'
}

//type assertion 1
let cid: any = 1
let customerId = <number>cid

//type assertion 2
let customerId2 = cid as number

function addNum (x: number, y: number): number{
    return x + y
}

//interfaces 

interface UserInterface{
    id: number,
    name: string
}

const user1: UserInterface ={
    id: 1,
    name: 'john',
}

/*interface can't be used with unions
    adding '?' to field makes it optional
*/

//classes 

/* protect variable can only be accessed within that class or class that extends to that class */
class Person {
    id: number
    name: string

    constructor(id: number, name: string){
        this.id =id
        this.name = name
    }
}

class Employees extends Person{
    position: string

    constructor(id: number, name: string, position: string){
        super(id, name)
        this.position = position
    }
}

// generics 
function getArray<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3.5])
let strArray = getArray<string>(['str','string','s'])

strArray.push('shush')
console.log(strArray)

