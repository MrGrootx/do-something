const books: { name: string; isGood: boolean; price: number } = {
  name: "game of thrones",
  isGood: true,
  price: 100,
};

console.log(books);




// Array of objects
const peoples: { name: string; age: number }[] = [
  { name: "Abishek", age: 30 },
  { name: "Raj", age: 25 },
];

console.log(peoples);


//Define type separate
type People = { name: string; age: number };

const peoples: People[] = [
  { name: "Abishek", age: 30 },
  { name: "Raj", age: 25 },
];

console.log(peoples);
