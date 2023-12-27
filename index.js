const names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
const ages = [32, 30, 26, 28, 44];

// Combine names and ages into an array of objects
const people = names.map((name, index) => ({ name, age: ages[index] }));

// Filter people based on age condition
const filteredNames = people.filter(person => person.age > 30 && person.age < 40).map(person => person.name);

// Print the result
console.log(filteredNames.join(' '));
