function search() {
    const listItems = document.querySelectorAll('#towns li')
    const input = document.getElementById('searchText').value
    const result = document.getElementById('result')

    let sum = 0

    for (const li of listItems) {
        const inputToLower = input.toLowerCase()
        const liTextToLower = li.textContent.toLowerCase()
        
        if (liTextToLower.includes(inputToLower)) {
            li.style.fontWeight = 'bold'
            li.style.textDecoration = 'underline'
            sum++

        } else {
            li.style.fontWeight = ''
            li.style.textDecoration = ''
        }
    }
    result.textContent = `${sum} matches found`
}
