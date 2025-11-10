// traditional function declaration

function add(a, b) {
  const result = a + b;
  return result;
}

const sum = add(5, 10);
console.log(sum);

// function expression
const multiply = function (x, y) {
    return x * y;
    };
console.log(multiply(4, 3)); // Outputs: 12

// arrow function
const divide = (m, n) => {
    return m / n;
    };
console.log(divide(20, 4)); // Outputs: 5

// concise arrow function
const square = x => x * x;
console.log(square(6)); // Outputs: 36

// arrow function with no parameters
const greet = () => 'Hello, World!';
console.log(greet()); // Outputs: Hello, World!

// arrow function with multiple statements
const complexOperation = (p, q) => {
    const sum = p + q;
    const product = p * q;
    return { sum, product };
    };
console.log(complexOperation(3, 7)); // Outputs: { sum: 10, product: 21 }       

