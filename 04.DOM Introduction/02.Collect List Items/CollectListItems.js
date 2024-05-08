function extractText() {
    const li = document.querySelectorAll('ul#items li')
    const textarea = document.querySelector('#result')

    for (const liItem of li) {
        textarea.value += liItem.textContent + '\n'
    }
    
    // li.forEach(item => textarea.value += item.textContent + '\n')
    
}