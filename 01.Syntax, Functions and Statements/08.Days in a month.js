function daysInMonth(month, year) {
    if (month < 1 || month > 12) {
        return "Invalid month!"
    }
    let nextMonth = new Date(year, month, 1)
    let lastDayCurrentMonth = new Date(nextMonth - 1)

    console.log(lastDayCurrentMonth.getDate())

}

daysInMonth(1, 2012)