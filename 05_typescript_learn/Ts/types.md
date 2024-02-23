import { People } from "./types/People.type";


const peoples: People[] | null = [
  { name: "Abishek", age: 30 },
  { name: "Raj", age: 25 },
];

console.log(peoples);


-- 2
import { People } from "./types/People.type";


const peoples: any[] | null = [
  { name: "Abishek", age: 30 },
  { name: "Raj", age: 25 },
];

// WE CAN USE BOTH OF THIS
// const newPeople = <People[]>peoples // type 1
const newPeople = peoples as People[]  // type 2

console.log(newPeople[0]);

