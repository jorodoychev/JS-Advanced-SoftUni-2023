function solve() {
    const input = document.getElementById('text').value
    const namingConvention = document.getElementById('naming-convention').value
    const result = document.getElementById('result')

    let toLowerCase = input.toLowerCase()
    let words = toLowerCase.split(' ')

    if (namingConvention !== 'Camel Case' && namingConvention !== 'Pascal Case') {
        result.textContent = 'Error!'
        return
    }

    if (namingConvention === 'Camel Case') {

        for (let i = 1; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        }
        
    } else {

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        }
    }

    result.textContent = words.join('')
}