const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;


// single / one parameter.  
const getAge = (person) => person.age;
const student = { name: "Ananta", age: 45 };
const age = getAge(student);

// console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([2, 3, 4, 5, 6, 7]);
// console.log(third);


// No Parameter.

const getPI = () => Math.PI;
console.log(getPI());
