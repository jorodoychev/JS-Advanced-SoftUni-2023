function previousDate(year, month, day) {
    const currentDate = new Date(year, month - 1, day)
    const previousDate = new Date(currentDate)
    previousDate.setDate(currentDate.getDate() - 1)

    const previousYear = previousDate.getFullYear()
    const previousMonth = previousDate.getMonth() + 1
    const previousDay = previousDate.getDate()

    console.log(`${previousYear}-${previousMonth}-${previousDay}`)
}

previousDate(2016, 9, 30)