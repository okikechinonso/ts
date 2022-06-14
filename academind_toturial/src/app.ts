import * as fs from "fs/promises";
import * as path from "path";
import { parse } from "csv-parse";

type Bank = {
  id: string;
  name: string;
  wema: string;
  alerzoId: string;
};

export async function banks(): Promise<Bank[]> {
  const csvFilePath = path.resolve(
    __dirname,
    "/Users/Admin/Desktop/BankCodes.csv"
  );
  const data = await fs.readFile(csvFilePath, { encoding: "utf8" });
  const headers: string[] = ["bank_name", "wema", "alerzoId"];
  let banks: Bank[];
  parse(
    data,
    {
      delimiter: ",",
      columns: headers,
    },
    (error, result: Bank[]) => {
      if (error) {
        console.error(error);
      }
     
      console.log("Result", result);
      banks = result;
      
      const content = `const banks = ${JSON.stringify(banks)}`
        fs.writeFile('./static.ts', content);
      return banks;
    }
  );
  
  console.log("here");
  return [];
}
console.log("here");

banks();

// import fastify, { FastifyRequest, FastifyReply } from "fastify";
// import fs from 'fs';

// const app = fastify({ logger: true });
// const port = 4000;

// app.get("/keys", async (request: FastifyRequest, reply: FastifyReply) => {
//     let privateKey = fs.readFileSync('keys/private.jwk');

//     return reply.code(200).send(privateKey);
// });

// app.listen(port, (err, address) => {
//     if (err) {
//         app.log.error(err);
//         process.exit(1);
//     }
//     app.log.info(`server listening on ${address}`);
// });

// console.log("start serve successfully");

// function add(n1:number, n2:number): number{
//     console.log(typeof n1 === 'number')
//     return n1 + n2;
// }
// console.log(add(2,5))

// //object
// const person: {
//     name: string,
//     age: number,
//     number: number,
// } = {
//     name: "chinonso",
//     age: 15,
//     number: 78
// }

// let arr: string[];
// arr = ["string"];

// //tuples

// const person1: {
//     name: string,
//     age: number,
//     number: number,
//     role?: [number, string], //tuples
// } = {
//     name: "chinonso",
//     age: 15,
//     number: 78
// }
// //enum
// enum Role {
//     ADMIN,
//     READ_ONLY,
//     AUTHOR,
// }

// // add change the identifiers if you don't want to use the equal sign to reassign
// enum Role2 {
//     ADMIN =3,
//     READ_ONLY,
//     AUTHOR,
// }

// const person2: {
//     name: string,
//     age: number,
//     number: number,
//     role?: Role //tuples
// } = {
//     name: "chinonso",
//     age: 15,
//     number: 78
// }

// ///unnions

// let names: string | boolean;
// names = "chinonso"

// function sub(input: number|boolean, input2: number){
//     if (typeof input === 'number'){
//         return input+input2
//     }

// }

// // type alias

// type Combineable = number | string;

// //never is used for functioon that never return anything and for infiniter loop
// function generateError(message: string, code: number): never{
//     throw{
//         message: message,
//          errorCode: code
//     }
// }
// generateError('An error occured',500)
