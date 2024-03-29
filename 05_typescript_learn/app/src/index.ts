import { People } from "./types/People.type";

const Person: People = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function getFullName(firstName: string, lastName: string): string {
  const fullName = `${firstName} ${lastName}`;
  return fullName;
}

// TYPE CAST 
// Method 1

// getFullName(Person.firstName, Person.lastName);

// Method 2
getFullName(Person.firstName as string, Person.lastName as string);






