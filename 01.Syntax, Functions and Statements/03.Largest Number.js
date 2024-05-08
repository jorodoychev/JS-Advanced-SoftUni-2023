function largestNumber(...nums) {
    let largest = Math.max(...nums);

    console.log(`The largest number is ${largest}.`);
}

largestNumber(5, -3, 16)