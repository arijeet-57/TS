import locales = require("zod/v4/locales");

function greet(firstName: string) {
    console.log("hello " + firstName);
};
greet("Blake");




function sum(a: number, b: number) : number {
    return a+b;
}
const value = sum(3,4);
console.log(value);
