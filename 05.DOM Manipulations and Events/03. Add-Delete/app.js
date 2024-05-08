function addItem() {
    const input = document.getElementById('newItemText')
    const list = document.getElementById('items')
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.setAttribute('href', '#')
    a.textContent = '[Delete]'

    if (input.value) {
        li.textContent = input.value
        li.appendChild(a)
        list.appendChild(li)
        input.value = ''

        a.addEventListener('click', () => li.remove())
        
    }

}