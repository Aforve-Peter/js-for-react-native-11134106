function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the number if it is even
        } else {
            return num * 3; // Triple the number if it is odd
        }
    });
}

console.log(processArray [1,2,4,5]);

const num =  [1,2,3,4,5,6,7]
const results = processArray(num)
console.log(results);