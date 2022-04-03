// Write a function that takes an array of integers, and finds the pair of adjacent elements that has the largest product and return that product.

const largestProduct = (arr) => {
    let productArr = [];
    //Find 2 adjacent numbers in the array
    for (let i = 0; i < arr.length - 1; i++) {
        //multiply them and store in new array
        productArr.push(arr[i] * arr[i + 1])
    }
    //determine maximum product obtained
    return Math.max(...productArr);
}


const result = largestProduct([1, 3, 5, 8])
