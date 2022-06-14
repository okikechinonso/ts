"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.banks = void 0;
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
const csv_parse_1 = require("csv-parse");
function banks() {
    return __awaiter(this, void 0, void 0, function* () {
        const csvFilePath = path.resolve(__dirname, "/Users/Admin/Desktop/BankCodes.csv");
        const data = yield fs.readFile(csvFilePath, { encoding: "utf8" });
        const headers = ["bank_name", "wema", "alerzoId"];
        let banks;
        (0, csv_parse_1.parse)(data, {
            delimiter: ",",
            columns: headers,
        }, (error, result) => {
            if (error) {
                console.error(error);
            }
            console.log("Result", result);
            banks = result;
            const content = `const banks = ${JSON.stringify(banks)}`;
            fs.writeFile('./static.ts', content);
            return banks;
        });
        console.log("here");
        return [];
    });
}
exports.banks = banks;
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
