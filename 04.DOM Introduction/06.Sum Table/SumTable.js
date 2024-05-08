function sumTable() {
    const result = document.getElementById('sum')
    const td = document.querySelectorAll('td:nth-child(2)')
    let sum = 0

    for (let i = 0; i < td.length - 1; i++) {
        sum+=Number(td[i].textContent)
    }
    
    result.textContent = sum.toString()
    
}