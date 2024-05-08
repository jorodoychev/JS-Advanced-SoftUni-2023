function solve() {
    const input = document.getElementById('input')
    const select = document.getElementById('selectMenuTo')
    const result = document.getElementById('result')
    const btn = document.getElementsByTagName('button')[0]

    const optionBinary = document.createElement('option')
    optionBinary.value = 'Binary'
    optionBinary.textContent = 'Binary'
    select.appendChild(optionBinary)

    const optionHex = document.createElement('option')
    optionHex.value = 'Hexadecimal'
    optionHex.textContent = 'Hexadecimal'
    select.appendChild(optionHex)

    btn.addEventListener('click', () => {
        if (select.value === 'Binary') {
            result.value = Number(input.value).toString(2)
        }
        if (select.value === 'Hexadecimal') {
            result.value = Number(input.value).toString(16).toUpperCase()
        }
        
    })

}