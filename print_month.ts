function print_month(month: number, year: number): void {
    if (month < 1 || month > 12 || year <= 0) {
        console.log("Invalid month or year.")
        return
    }

    //Create a Date object for the first day of the month
    const d = new Date(year, month - 1, 1)
    const wd = d.getDay()
    const daysInMonth = new Date(year, month, 0).getDate()
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    console.log(`${year} - ${month}`)
    console.log("  ", daysOfWeek.join('\t\t'))
    let tmp: string = ''
    for (let i = 0; i < wd; i++) {
        tmp += '\t'
    }
    for (let i = 1; i <= daysInMonth; i++) {
        tmp += `\t${i}\t`
        if ((i + wd) % 7 === 0) {
            console.log(tmp)
            console.log('')
            tmp = ''
        }

    }
    console.log("")
}

print_month(11, 2023)
