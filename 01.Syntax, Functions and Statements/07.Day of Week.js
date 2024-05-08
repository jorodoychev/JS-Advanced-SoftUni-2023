function dayOfWeek(day) {
    let days = new Map()

    days.set('Monday', 1)
    days.set('Tuesday', 2)
    days.set('Wednesday', 3)
    days.set('Thursday', 4)
    days.set('Friday', 5)
    days.set('Saturday', 6)
    days.set('Sunday', 7)

    if (days.get(day)===undefined){
        console.log('error')
    }
    else {
        console.log(days.get(day))
    }

}

dayOfWeek('Monday')