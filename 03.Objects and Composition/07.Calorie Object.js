function calorieObject(arr) {
    const obj = {}

    for (let i = 0; i < arr.length; i += 2) {
        const propName = arr[i];
        obj[propName] = Number(arr[i + 1]);
    }

    console.log(obj)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])