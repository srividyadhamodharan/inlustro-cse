// reduce
const nums = [34, 23, 4, 56, 65, 18, 8, 72, 13, 39, 53, 17, 28, 5, 68];
// total calculation - way 1
let sum = 0;
for (const num of nums) {
    sum = sum + num;
}
// total calculation - way 1
const reducer = (previous, current) => {
    console.log(typeof previous);
    return previous = previous + current; // here previous and current are numbers in parameter
}
const numsTotal = nums.reduce(reducer, 0);

//---------------------------

const jinis = [
    {
        id: 1,
        name: "Alta",
        price: 25
    },
    {
        id: 2,
        name: "Nail Polish",
        price: 500
    },
    {
        id: 3,
        name: "Face Mask",
        price: 255
    },
    {
        id: 4,
        name: "Mascara",
        price: 590
    },
    {
        id: 5,
        name: "Powder",
        price: 400
    }
]

// total calculation - way 1
let total = 0;
for (const jini of jinis) {
    total = total + jini.price;
}

// total calculation - way 2 (using reduce method)
const jinisReducer = (prev, curr) => prev + curr.price; // here prev and curr are object in parameter
const jinisTotal = jinis.reduce(jinisReducer, 0);

export { numsTotal, jinisTotal };