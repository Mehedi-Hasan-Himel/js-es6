const numbers = [4, 5, 2, 8, 10];
const doubled = []

// for(const num of numbers) {
//     doubled.push(num*2);
// }

// console.log(doubled); 


function doubleIt(num){
    return num * 2;
}

const result = numbers.map(doubleIt);
console.log(result);