function solve(...input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];

    let sideA = Math.abs(x1-0);
    let sideB = Math.abs(y1-0);

    let sideC = Math.sqrt(sideA * sideA + sideB * sideB);

    if (Number.isInteger(sideC) ){

        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {

        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    sideA = Math.abs(0-x2);
    sideB = Math.abs(0-y2);

    sideC = Math.sqrt(sideA * sideA + sideB * sideB);

    if (Number.isInteger(sideC) ){

        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {

        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    sideA = Math.abs(x1-x2);
    sideB = Math.abs(y1-y2);

    sideC = Math.sqrt(sideA * sideA + sideB * sideB);

    if (Number.isInteger(sideC) ){

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {

        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

function validityChecker(x1, y1, x2, y2) {
    const result = (x1, y1, x2, y2) => {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const status = Number.isInteger(distance) ? "valid" : "invalid";
        console.log({ distance });
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`;
    };

    console.log(result(x1, y1, 0, 0));
    console.log("-----------------------");
    console.log(result(x2, y2, 0, 0));
    console.log("-----------------------");
    console.log(result(x1, y1, x2, y2));
    console.log("-----------------------");
}

solve(3, 0, 0, 4);