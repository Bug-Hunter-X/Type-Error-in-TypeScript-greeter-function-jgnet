function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Correct usage with type checking
console.log(greeterArray(user)); // Handling the array correctly