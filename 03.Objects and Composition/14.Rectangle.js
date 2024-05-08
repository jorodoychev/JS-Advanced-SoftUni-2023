function rectangle(width, height, color) {

    function calcArea() {
        return Number(this.width * this.height)

    }

    return {
        width,
        height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea
    }

}

let rect = rectangle(4, 5, 'red')
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());