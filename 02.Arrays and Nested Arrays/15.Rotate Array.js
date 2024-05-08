function solve(input, num) {

    for (let i = 0; i < num % input.length; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}



solve(["Banana", "Orange", "Coconut", "Apple"], 15);